
'use client'
import React, { useState } from "react";
import { Tabs, TabsTrigger , TabsList , TabsContent } from "./ui/tabs";
import ModeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { HomeIcon } from "@radix-ui/react-icons";
import { Settings } from "lucide-react";


interface TabsBarProps {
  isDarkMode: boolean;
}

export function TabsBar() {
 
 
  const MainTabName = ['TimeLineCalender','Groups','Resources','Notes','PDFChat','Coding','PortFolioBuilder','Job'];
  let UtilityTab = ['']
  const LastTab = ['Settings' ,'Notify' , 'Profile']
  const [currentTab, setCurrentTab] = useState('');
  const [currentUtilityTab, setCurrentUtilityTab] = useState('');
  
  const handleUtilityTabClick = (tabName: React.SetStateAction<string>) => {
    setCurrentUtilityTab(tabName);
  };


  // Define states to track the visibility of the tabs
  const [TabsVisible, setTabsVisible] = useState(true);
 

  // Function to toggle visibility of the main tabs
  const toggleTabs = () => {
    setTabsVisible(!TabsVisible);
  };


  switch (currentTab) {
    case 'PDFChat':
      UtilityTab = ['New', 'DELETE']; 
      break;
    case 'Coding':
        UtilityTab = ['Language', 'Save To Notes']; 
        break;
    case 'Portfolio-Builder':
      UtilityTab = ['Publish', 'Github', 'Reset']; 
      break;
    case 'Jobs':
      UtilityTab = ['Openings', 'Current', 'Details']; 
      break;
    case 'Resources':
      UtilityTab = ['Books','PDF', 'PPT', 'Docs','Links']; 
      break;
    default:
      break;
  }

  return (
    <div className="flex items-center justify-start rounded-lg bg-background scrollbar-hide pb-3 overflow-scroll">

     <div className="pt-4 pl-4">
     <Button className="">
      <Link href={'/'}>
        <HomeIcon/>
      </Link>
      </Button>

     </div>


      <Tabs defaultValue={''} className="w-[342px] ">



        <div className="flex items-start md:flex-nowrap space-x-4">


          <div className="pl-2 pt-4 w-[442px] max-w-sm md:max-w-none md:w-auto">
            <TabsList className="pt-4 md:pt-0 md:overflow-x-auto max-w-full ">
              <div className="tabs-trigger-container">
                {MainTabName.map((value) => ( 
                  <TabsTrigger className='h-8' key={value} value={value} onClick={() => setCurrentTab(value)}>
                     <Link href={`/${value}`} >{value}</Link>
                  </TabsTrigger>
                ))}
              </div>  
            </TabsList>
         </div>

          <div className="pl-3 pt-4 h-9 w-[400px] md:w-[500px] max-w-sm md:max-w-none">
            
              <div className="w-[300px] tabs-trigger-container">
                {UtilityTab.map((value) => (
                  <Button
                  key={value}
                  className={`w-[240px] h-10 bg-gradient-to-r dark:from-secondary from-secondary dark:to-black to-white text-black dark:text-white ${value === currentUtilityTab ? 'active' : ''}`}
                  onClick={() => handleUtilityTabClick(value)}
                >
                  {value}
                </Button>
                ))}
              </div> 
            
          </div>

          <div className="pl-3 md:pl-2 pt-4 w-full md:w-full max-w-sm md:max-w-none">
            <TabsList className="md:overflow-x-auto max-w-full">
              <div className="tabs-trigger-container">
                {LastTab.map((value) => (
                  <TabsTrigger key={value} value={value} onClick={() => setCurrentTab(value)}>
                   {value}
                  </TabsTrigger>
                  
                ))}
              </div>
            </TabsList>
            <TabsContent value="Settings">test set</TabsContent>
            <TabsContent value="Profile">test Pet</TabsContent>
            <TabsContent value="Notify">test Net</TabsContent>
          </div>

          <div className="pl-2 pt-4 h-12 w-full">
            <ModeToggle/>
          </div>

          <div className=" w-full pl-3 pr-4 pt-4">
           <UserButton afterSignOutUrl='/' />
          </div>



          
        </div>
        
      </Tabs>

    </div>
  );
}

export default TabsBar;
