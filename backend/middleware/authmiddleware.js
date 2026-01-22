const jwt = require("jsonwebtoken");
const isauth=async(req,res,next)=>{
          try{
          console.log("Cookies:", req.cookies);          
         let {token} =  req.cookies;
        if(!token){
          return res.status(400).json({message:"token is missing"})
        }
        let verifytoken = await jwt.verify(token,process.env.JWTSECRET)
          if(!verifytoken){
          return res.status(400).json({message:"token not verify "})
     }
     req.userid = verifytoken.id;
     next();
          }catch(err){
                    return res.status(400).json({message:"error in is auth",err})
      }
          }
        
module.exports = isauth;
