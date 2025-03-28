import config from "../config.js"
import { v2 as cloudinary } from 'cloudinary'; // ✅ Correct Import
// const cloudinary = require("cloudinary").v2;

export default async function fileUploader(file) {
    try {
        cloudinary.config({
            cloud_name: config.cloudinary.cloud_name,
            api_key: config.cloudinary.api_key,
            api_secret: config.cloudinary.api_secret,
        })

        const result = await new Promise((res,rej)=>{
            cloudinary.uploader.upload_stream({folder:"uploads"},(err,result)=>{
                if(err) rej(err);
                res(result)
            }).end(file.data)
        })

        console.log("result",result)
        return result?.secure_url || ''
    }
    catch (err) {
        console.log("err in file upload ",err)
        return null
    }
}