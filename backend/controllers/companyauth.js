const validator = require("validator");
const User = require("../model/usermodel");
const bcrypt = require("bcryptjs");
const gentoken1 = require("../config/gentoken");
const Company = require("../model/companymodel");
exports.companysignup=async(req,res)=>{
          try{
   const {company,email,password} = req.body;
   let existcompany = await Company.findOne({email})
   if(existcompany){
          return res.status(409).json({message:"company already exist"})
   }
   if(!company){
          return res.status(400).json({message:"company name not found"})
   }
   if(!validator.isEmail(email)){
          return res.status(400).json({message:"Enter a valid email"})
   }
   if(password.length < 8){
         return res.status(400).json({message:"password should be 8 charactor long"}) 
   }
   let hashedpassword = await bcrypt.hash(password,10);
   let newcompany = await Company.create({
          company,email,password:hashedpassword
   })
   let token = await  gentoken1(newcompany._id);
     res.cookie("token",token,{
        httpOnly : true,
        secure:true,
        sameSite:"none",
        maxAge : 7*24*60*60*1000
     })
     return res.status(201).json(newcompany)
          }catch(err){
    res.status(400).json({message:"err in signup",error:err.message})
          }
}
exports.companylogin=async(req,res)=>{
          try{
   const {email,password} = req.body;
   let existcompany = await Company.findOne({email})
   if(!existcompany){
          return res.status(409).json({message:"go to signup"})
   }
   if(!validator.isEmail(email)){
          return res.status(400).json({message:"Enter a valid email"})
   }
   let verifypassword = await bcrypt.compare(password,existcompany.password);
   if(!verifypassword){
          return res.status(409).json({message:"wrong password"})
   }
   let token = await gentoken1(existcompany._id);
     res.cookie("token",token,{
        httpOnly : true,
        secure:true,
        sameSite:"none",
        maxAge : 7*24*60*60*1000
     })
     return res.status(200).json(existcompany)
          }catch(err){
    res.status(400).json({message:"err in login",err})
          }
}
exports.companylogout=async(req,res)=>{
          try{
           res.clearCookie("companytoken");
           return res.status(200).json({message:"logout successfully"})
          }catch(err){
                    return res.status(400).json({message:"err in logout",err})
          }
}
exports.curcompany=async(req,res)=>{
          try{
   let companyid = req.companyid;
     let curcompany = await Company.findById(companyid);
     if(!curcompany){
          return res.status(404).json({message:"curcompany not found"})
     }
     return res.status(200).json(curcompany);
          }catch(err){
return res.status(400).json({message:"err in curcompany",err})
          }
}
