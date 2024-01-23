import FileUpload from "@/components/FileUpload";
import React from "react";

export function PDFChatCenter() {
  return (
  <div className="scrollable-content h-screen">
    <div className="flex flex-col items-center">
      <h1 className="flex items-center justify-center font-semibold text-3xl py-24">
       Learn by Chatting... 
      </h1>

      <div className="py-12">
        <FileUpload/>
      </div>

      

    </div>
  </div>  
  );
}
export default PDFChatCenter;
