/* eslint-disable react/no-children-prop */
'use client'
import TabsBar from "@/components/tabs";
import RenderModel from "./RenderModel/page";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

  const {userId} = useAuth()
  console.log(userId);
   
  return (
    

    <div className=" w-screen h-screen overflow-scroll">
        
      <div className="md:flex h-screen w-screen z-1 text-black">
        {userId ? (
          <div className="absolute w-screen z-10 pt-2 pl-2 pr-2">
            <TabsBar/> 
            </div>
         
        ):(
          <div className="w-1/2 space-x-10 flex h-[90px] md:h-screen items-center justify-center pt-2 pb-2 bg-black">

        <Link href={'/sign-up'}>
          <Button>
            Log-In
          </Button>
        </Link>
        
        <Link href={'/sign-up'}>
          <Button>
            Sign-Up
          </Button>
        </Link>
          </div>
        )} 

       <RenderModel/>

       
      </div>
          
    </div>
     
    
  );
}
