const cloudinary = require('cloudinary').v2;
const fs = require('fs')
const uploadOnCloudinary = async(filepath)=>{
           cloudinary.config({ 
        cloud_name: process.env.Cloud_Name, 
        api_key: process.env.Api_Key, 
        api_secret: process.env.Api_Secret 
    });
    try{
   if(!filepath){
          return null
    }
    const uploadResult = await cloudinary.uploader
       .upload(filepath,{
          folder: "job-portal-resumes",
      resource_type: "raw",
       })
       fs.unlinkSync(filepath)
       return uploadResult.secure_url
    }catch(err){
    fs.unlinkSync(filepath)
    console.log(err)
    } 
}
module.exports = uploadOnCloudinary