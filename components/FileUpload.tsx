import React, { useState } from 'react'
import {useDropzone} from 'react-dropzone'
import {Inbox, Loader2} from 'lucide-react'
// import { log } from 'console'
import { uploadToS3 } from '@/lib/s3'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const FileUpload = () => {

    const router = useRouter()

    const [uploading , setUploading] = React.useState(false)

    const {mutate , isPending} = useMutation({
        mutationFn: async ({fileKey , fileName} : {fileKey:string , fileName:string}) => {
            const response = await axios.post('/api/create-chat' , {
                fileKey , fileName ,
            });

            return response.data;
        }

    })

const {getRootProps , getInputProps} = useDropzone({
    accept: {'application/pdf':[".pdf"]},
    maxFiles:1,
    onDrop: async (acceptedFiles) => {
        // console.log(acceptedFiles);
        const file = acceptedFiles[0]

        if(file.size > 10 * 1024 * 1024) {
            toast.error("File is too Large");
        //  alert ( 'Please Upload files under the size of 10Mb' ) 
        return
     }

        try{ 
            setUploading(true)
            const data = await uploadToS3(file);
            if(!data?.fileKey || !data.fileName){
                toast.error("Something went Wrong");
                // alert("Something went wrong");
                return;
            }
            mutate(data , {
                onSuccess: ({chat_id}) => {
                    toast.success("sucess in creating chat")
                    router.push(`/chat/${chat_id}`)
                    // toast.success(data.message)  
                },
                onError: () => {
                    toast.error("Error creating chat") 
                }
            })
          }

        catch(error){
            console.log(error);
        } finally {
            setUploading(false)
        }
        
    }
})

  return (
    <div className='bg-gradient-to-r from-slate-900 dark:from-black dark:via-pink-950 via-pink-700 dark:to-black to-slate-900 p-2 py-3 w-[400px] rounded-xl shadow-2xl'>
        <div {...getRootProps({
            className: 'border-dashed border-2 dark:border-purple-200 rounded-xl cursor-pointer bg-black py-16 flex items-center justify-center space-x-4'

        })}>
        <input {...getInputProps()}/>
        {(uploading || isPending) ? (
            <>
            <Loader2 className='h-10 w-10 text-red-800 animate-spin'/>
            <p className='mt-2 text-sm text-slate-500'>
                Splling Tea to Gpt ... 
            </p>
            </>
        ):(
            <>
            <Inbox className='w-10 h-8 text-primary'/>
            <p className='text-white text-xl'>
                Drop Your Files Here . . !
            </p>
            </>
        )}
        </div>
    </div>
  )
}

export default FileUpload


