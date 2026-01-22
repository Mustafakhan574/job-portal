const jwt = require("jsonwebtoken");
const companyauth=async(req,res,next)=>{
          try{
         let token =  req.cookies.companytoken;
        if(!token){
          return res.status(400).json({message:"token is missing"})
        }
        let verifytoken = await jwt.verify(token,process.env.JWTSECRET)
          if(!verifytoken){
          return res.status(400).json({message:"token not verify "})
     }
     req.companyid = verifytoken.id;
     
     next();
          }catch(err){
                    return res.status(400).json({message:"error in is auth",err})
      }
          }
        
module.exports = companyauth;