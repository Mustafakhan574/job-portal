const mongoose = require('mongoose');

const appliedpostSchema = new mongoose.Schema({
          username:{
                 type:String,
                 required:true   
          },
          phonenumber:{
                 type:Number,
                 required:true   
          },
          email:{
                 type:String,
                 required:true   
          },
          address:{
              type:String,
          required:true       
          },
          user:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"User"
          },
          company:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"Company"
          },
          post:{
             type:mongoose.Schema.Types.ObjectId,
                    ref:"Post"
          }
},{timestamps:true})
const Apply = mongoose.model("Apply",appliedpostSchema)
module.exports = Apply;