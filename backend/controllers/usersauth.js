const validator = require("validator");
const bcrypt = require("bcryptjs");
const gentoken = require("../config/gentoken");
const User = require("../model/usermodel");
exports.usersignup=async(req,res)=>{
          try{
   const {name,email,password} = req.body;
   let existuser = await User.findOne({email})
   if(existuser){
          return res.status(409).json({message:"user already exist"})
   }
   if(!name){
          return res.status(400).json({message:"name not found"})
   }
   if(!validator.isEmail(email)){
          return res.status(400).json({message:"Enter a valid email"})
   }
   if(password.length < 8){
         return res.status(400).json({message:"password should be 8 charactor long"}) 
   }
   let hashedpassword = await bcrypt.hash(password,10);
   let user = await User.create({
          name,email,password:hashedpassword
   })
   let token = await gentoken(user._id);
     res.cookie("token",token,{
        httpOnly : true,
        secure:true,
        sameSite:"none",
        maxAge : 7*24*60*60*1000
     })
     return res.status(201).json(user)
          }catch(err){
   return res.status(400).json({message:"err in signup",error:err.message})
          }
}
exports.userlogin=async(req,res)=>{
          try{
   const {email,password} = req.body;
   let existuser = await User.findOne({email})
   if(!existuser){
          return res.status(409).json({message:"go to signup"})
   }
   if(!validator.isEmail(email)){
          return res.status(400).json({message:"Enter a valid email"})
   }
   let verifypassword = await bcrypt.compare(password,existuser.password);
   if(!verifypassword){
          return res.status(409).json({message:"wrong password"})
   }
   let token = await gentoken(existuser._id);
     res.cookie("token",token,{
        httpOnly : true,
        secure:true,
        sameSite:"none",
        maxAge : 7*24*60*60*1000
     })
     return res.status(200).json(existuser)
          }catch(err){
    return res.status(400).json({message:"err in login",err})
          }
}
exports.userlogout=async(req,res)=>{
          try{
           res.clearCookie("usertoken");
           return res.status(200).json({message:"logout successfully"})
          }catch(err){
                    return res.status(400).json({message:"err in logout",err})
          }
}
exports.curuser=async(req,res)=>{
          try{
   let userid = req.userid;
     let curuser = await User.findById(userid);
     if(!curuser){
          return res.status(404).json({message:"curuser not found"})
     }
     return res.status(200).json(curuser);
          }catch(err){
return res.status(400).json({message:"err in curuser",err})
          }
}
