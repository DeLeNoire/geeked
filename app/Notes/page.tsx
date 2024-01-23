
'use client'
import TabsBar from '@/components/tabs'
import React from 'react'
import NotesLeft from './NotesLeft'
import NotesCenter from './NotesCenter'
import NotesRight from './NotesRight'
import SearchBar from '@/components/Searching'
import { useAuth } from '@clerk/nextjs'

type Props = {}

const Notes = (props: Props) => {
    const {userId} = useAuth()
    console.log(userId);
  return (
    <>
  
      <div className='scrollbar-hide' >
       <TabsBar/>
      </div>

      <div className='scrollbar-hide overflow-scroll'>
      <div className="w-[1440px] h-[900px] flex md:flex-nowrap space-x-2 p-3 pt-3 overflow-scroll bg-black]">    
        <div className={`md:w-[400px] w-[320px] rounded-lg pt-2 pb-2 pl-2 pr-2  bg-gradient-to-b from-secondary dark:to-zinc-900 to-slate-100 overflow-scroll`} style={{ flex: '1 1 auto' }}>
          <NotesLeft/>
        </div>
     

        <div className=" md:w-[600px] w-[360px] rounded-lg pt-2 pb-2 pl-2 pr-2 bg-gradient-to-b from-secondary dark:to-zinc-900 to-slate-100"  style={{ flex: '1 1 auto' }}>
         {userId && (
          <NotesCenter/>
         )}
        </div>
     

        <div className="md:w-[400px] w-[320px] bg-gradient-to-b from-secondary dark:to-zinc-900 to-slate-100 rounded-lg  pt-2 pb-2 pl-2 pr-2" style={{ flex: '1 1 auto' }}>
          <NotesRight/>
        </div> 
      </div>
      </div> 
   

      <SearchBar/>
    
    </>
  )
}

export default Notes