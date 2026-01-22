const validator = require("validator");
const gentoken2 = require("../config/gentoken");
const Company = require("../model/companymodel");
const User = require("../model/usermodel");
exports.adminlogin=async(req,res)=>{
          try{
   const {email,password} = req.body;
   if(!validator.isEmail(email)){
             return res.status(400).json({message:"Enter a valid email"})
      }
   if(password.length < 8){
         return res.status(400).json({message:"password should be 8 charactor long"}) 
   }   
   if(email !== process.env.ADMINEMAIL){
          return res.status(400).json({message:"give the correct email"})
   }
   if(password !== process.env.ADMINPASSWORD){
          return res.status(400).json({message:"give the correct password"})
   }
   let token = await gentoken2(email);
   res.cookie("admintoken",token,{
       httpOnly : true,
        secure:true,
        sameSite:"none",
        maxAge : 7*24*60*60*1000
   })
   return res.status(200).json(token);
          }catch(err){
              return res.status(400).json({message:"err in adminlogin",error:err.message})      
          }
}
module.exports.getadmin=async(req,res)=>{
     try{
  let adminemail  = req.email;
  if(!adminemail){
     return res.status(404).json({message:"admin is not found"})
  }
  return res.status(201).json({
     email:adminemail,
     role:"admin"
  })
     }catch(err){
console.log("get admin",err)
    return res.status(400).json({message:"error in get admin",err})
     }
}
module.exports.companiesaccounts=async(req,res)=>{
     try{
  let accounts = await Company.find();
  if(!accounts || accounts.length < 1){
   return res.status(404).json({message:"company account is not found"})
  }
  return res.status(200).json(accounts);
     }catch(err){
console.log("get admin",err)
    return res.status(400).json({message:"error in company accounts admin",err})
     }
}
module.exports.usersaccounts=async(req,res)=>{
     try{
  let usersaccounts = await User.find();
  if(!usersaccounts || usersaccounts.length < 1){
   return res.status(404).json({message:"users account is not found"})
  }
  return res.status(200).json(usersaccounts);
     }catch(err){
console.log("get admin",err)
    return res.status(400).json({message:"error in users accounts  admin",err})
     }
}