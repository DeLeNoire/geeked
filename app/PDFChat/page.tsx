'use client'
import React from 'react'
import PDFChatCenter from './PDFChatCenter'
import PDFChatLeft from './PDFChatLeft'
import PDFChatRight from './PDFChatRight'
import TabsBar from '@/components/tabs'
import SearchBar from '../../components/Searching'
import { useAuth } from '@clerk/nextjs'

function PDFChat() {

  const {userId} = useAuth()
  console.log(userId);
   

  return (
    <>
  
      <div className='scrollbar-hide' >
       <TabsBar/>
      </div>

      <div className='scrollbar-hide overflow-scroll'>
      <div className="w-[1440px] h-[690px] flex md:flex-nowrap space-x-2 p-3 pt-3 overflow-hidden bg-black]">    
        <div className={`md:w-[300px] w-[320px] rounded-lg pt-2 pb-2 pl-2 pr-2  bg-gradient-to-b from-secondary dark:to-zinc-900 to-slate-100 overflow-scroll`} style={{ flex: '1 1 auto' }}>
          <PDFChatLeft/>
        </div>
     

        <div className=" md:w-[600px] w-[360px] rounded-lg pt-2 pb-2 pl-2 pr-2 bg-gradient-to-b from-secondary dark:to-zinc-900 to-slate-100"  style={{ flex: '1 1 auto' }}>
         {userId && (
          <PDFChatCenter/>
         )}
        </div>
     

        <div className="md:w-[500px] w-[320px] bg-gradient-to-b from-secondary dark:to-zinc-900 to-slate-100 rounded-lg  pt-2 pb-2 pl-2 pr-2" style={{ flex: '1 1 auto' }}>
          <PDFChatRight/>
        </div> 
      </div>
      </div> 
   

      <SearchBar/>
    


    </>
   
  )
}

export default PDFChat


