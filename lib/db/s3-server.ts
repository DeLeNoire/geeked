// import { S3 } from "@aws-sdk/client-s3";
import S3 from "aws-sdk/clients/s3";
import fs from "fs";
export async function downloadFromS3(fileKey: string): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const s3 = new S3({
        region: "ap-south-1",

        credentials: {
          accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY!,
        },
      });
      const params = {
        Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME!,
        Key: fileKey,
      };

      const obj = await s3.getObject(params);

      const fileName = `/tmp/files${Date.now().toString()}.pdf`;

      // open the writable stream and write the file
      const file = fs.createWriteStream(fileName);
      file.on("open", function (fd) {
        obj.createReadStream().pipe(file).on("finish", () => {
          return resolve(fileName);
        });
      });
    } catch (error) {
      console.error(error);
      reject(error);
      return null;
    }
  });
}
