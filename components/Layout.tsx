// Layout.js
import Link from 'next/link';
import { ReactNode } from 'react';

type MyComponentProps = {
    children: ReactNode;
  };

const Layout = ({ children }: MyComponentProps) => {
  return (
    <div className=" md:w-[1600px] w-[1200px] h-[780px] flex md:flex-nowrap space-x-4 p-4 pt-6 overflow-scroll">
         
         
    <div className={`md:w-[400px] w-1/4 rounded-lg pt-2 pb-2 pl-3 pr-3  bg-gradient-to-b from-background to-secondary`} style={{ flex: '1 1 auto' }}>
      
    </div>

    <div className=" md:w-[600px] w-2/4 rounded-lg pt-2 pb-3 pl-3 pr-3 bg-gradient-to-b from-background to-secondary"  style={{ flex: '1 1 auto' }}>
      
    </div>

    <div className="md:w-[600px] w-1/4  bg-gradient-to-b from-background to-secondary rounded-lg  pt-2 pb-2 pl-3 pr-3" style={{ flex: '1 1 auto' }}>
      
    </div>
    </div>
  );
};

export default Layout;
