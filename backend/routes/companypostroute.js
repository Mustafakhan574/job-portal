const express = require("express");
const { uploadjob, getallposts, deletepost, allposts, userappliedjobs, getapplyposts, getallresponses } = require("../controllers/companyposts");
const companyauth = require("../middleware/companyauth");
const isauth = require("../middleware/authmiddleware");
const upload = require("../middleware/multer");
let companypostRouter= express.Router();
companypostRouter.post("/uploadjob",companyauth,uploadjob);
companypostRouter.get("/allposts",companyauth,getallposts);
companypostRouter.get("/deletepost/:id",companyauth,deletepost);
companypostRouter.get("/allpostsforuser",allposts);
companypostRouter.get("/getapplyposts",isauth,getapplyposts);

companypostRouter.post("/apply/:postid",isauth,upload.single("resume"),userappliedjobs);
companypostRouter.get("/getallresponses",companyauth,getallresponses);
module.exports = companypostRouter;