const Apply = require("../model/appliedpostmoel");
const Company = require("../model/companymodel");
const Post = require("../model/companypostmodel");
const User = require("../model/usermodel");

exports.uploadjob=async(req,res)=>{
          try{ 
    let {companyname,jobtitle,jobdescription} = req.body;
    if(!companyname || !jobtitle || !jobdescription){
          return res.status(400).json({message:"enter all details"})
    }
    let curcompanyid = req.companyid;
    let curcompany = await Company.findById(curcompanyid);
    if(!curcompany){
          return res.status(404).json({message:"curcompany not found"})
    }
          let newpost = await Post.create({
                    companyname,jobtitle,jobdescription,companyid:curcompany._id
               })
          return res.status(201).json(newpost);     
          }catch(err){
          return res.status(500).json({message:"err in upload job",error:err.message})
          }
}
exports.getallposts=async(req,res)=>{
      try{         
   let allposts = await Post.find({companyid:req.companyid})
   if(!allposts || allposts.length <1){
      return res.status(404).json({message:"posts not found"})
   }
   return res.status(200).json(allposts);
      }catch(err){
         return res.status(500).json({message:"err in get all  posts",error:err.message})   
      }
}
exports.deletepost=async(req,res)=>{
      try{
  let {id} = req.params;
  let existpost = await Post.findByIdAndDelete(id);
  let restposts = await Post.find({companyid:req.companyid})
  if(!restposts || restposts.length < 1){
     return res.status(404).json({message:"post in delete not found"})
  }
     return res.status(200).json(restposts);
      }catch(err){
         return res.status(500).json({message:"err in delete post",error:err.message})     
      }
}
exports.allposts=async(req,res)=>{
      try{         
   let allposts = await Post.find()
   if(!allposts || allposts.length <1){
      return res.status(404).json({message:"posts not found"})
   }
   return res.status(200).json(allposts);
      }catch(err){
         return res.status(500).json({message:"err in get all  posts",error:err.message})   
      }
}
exports.userappliedjobs=async(req,res)=>{
      try{
   let {username,phonenumber,email,address} = req.body;
   let {postid} = req.params
   if(!username || !phonenumber || !email || !address){
      return res.status(404).json({message:"enter all details"})
   }  
   let curuser = await User.findById(req.userid)
   if(!curuser){
      return res.status(404).json({message:"curuser not found"})
   }
   
   let applypost = await Post.findById(postid);
   if(!applypost){
      return res.status(404).json({message:"apply post not found"})
   }
   let postcreate = await Apply.create({
      username,email,phonenumber,address,user:curuser._id,post:applypost._id,company:applypost.companyid
   })
   return res.status(201).json(postcreate)
      }catch(err){
          return res.status(500).json({message:"err in user applied  jobs",error:err.message})     
      }
}
exports.getapplyposts=async(req,res)=>{
      try{
   let curuser = await User.findById(req.userid)
   if(!curuser){
      return res.status(404).json({message:"curuser not found"})
   }
   let applypost = await Apply.find({user:curuser}).populate('post');
   
   if(!applypost || applypost.length < 1){
      return res.status(404).json({message:"apply post not found"})
   }
   return res.status(201).json(applypost)
      }catch(err){
          return res.status(500).json({message:"err in user applied  jobs",error:err.message})     
      }
}
exports.getallresponses=async(req,res)=>{
   try{

  let allresponses = await Apply.find({company:req.companyid}).populate("post",'jobtitle');
  if(allresponses.length < 1){
    return res.status(404).json({message:"responses  not found"})
  }
  return res.status(200).json(allresponses)
   }catch(err){
      return res.status(500).json({message:"err in responses applied  jobs",error:err.message})  
   }
}