const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
          companyname:{
                 type:String,
                 required:true   
          },
          jobtitle:{
                 type:String,
                 required:true   
          },
          jobdescription:{
                 type:String,
                 required:true   
          },
          companyid:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"Company"
          },
},{timestamps:true})
const Post = mongoose.model("Post",postSchema)
module.exports = Post;