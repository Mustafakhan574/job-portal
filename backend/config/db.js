const mongoose  = require("mongoose")

const mongoconnect=async()=>{
          try{
await mongoose.connect(process.env.DBLINK);
          console.log("db connect")
          }catch(err){
                    console.log("err in db",err.message)
          }
          
}
module.exports = mongoconnect;