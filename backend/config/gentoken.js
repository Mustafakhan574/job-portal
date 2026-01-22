const jwt = require("jsonwebtoken");
const env = require('dotenv');
env.config();
const gentoken=async(id)=>{
          try{
    const token = await jwt.sign({id},process.env.JWTSECRET,{
          expiresIn:"7d"
    })
    return token;
          }catch(err){
      console.log("err in gentoken",err)
          }
}
module.exports = gentoken;
const gentoken1=async(id)=>{
          try{
    const token = await jwt.sign({id},process.env.JWTSECRET,{
          expiresIn:"7d"
    })
    return token;
          }catch(err){
     console.log("err in gentoken",err)
          }
}
module.exports = gentoken1;
const gentoken2=async(email)=>{
          try{
    const token = await jwt.sign({email},process.env.JWTSECRET,{
          expiresIn:"7d"
    })
    return token;
          }catch(err){
     console.log("err in gentoken",err)
          }
}
module.exports = gentoken2;