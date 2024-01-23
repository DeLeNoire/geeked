import { db } from "@/lib/db";
import { loadS3IntoPinecone } from "@/lib/db/pinecone";
import { chats } from "@/lib/db/schema";
import { getS3Url } from "@/lib/s3";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server"
export async function POST(req: Request, res: Response) {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
    try {
      const body = await req.json();
      const { fileKey, fileName } = body;
      console.log(fileKey, fileName);
      await loadS3IntoPinecone(fileKey);
      const chat_id = await db
        .insert(chats)
        .values({
          fileKey: fileKey,
          pdfName: fileName,
          pdfUrl: getS3Url(fileKey),
          userId,
        })
        .returning({
          insertedId: chats.id,
        });
  
      return NextResponse.json(
        {
          chat_id: chat_id[0].insertedId,
        },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "internal server error" },
        { status: 500 }
      );
    }
  }