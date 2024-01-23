import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import React from "react";

export  function PDFChatCenter() {




  return (
  <div className="scrollable-content h-screen ">
    <div className="flex flex-col items-center py-4">
    <h1 className="font-semibold ">
       <Button className="bg-black">
        Open Chats
        </Button>
    </h1>
    </div>
  </div>  
  );
}
export default PDFChatCenter;
