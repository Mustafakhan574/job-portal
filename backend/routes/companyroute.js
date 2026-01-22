const express = require("express");
const { companysignup, companylogin, companylogout, curcompany } = require("../controllers/companyauth");
const companyauth = require("../middleware/companyauth");
let companyRouter= express.Router();
companyRouter.post("/companysignup",companysignup);
companyRouter.post("/companylogin",companylogin);
companyRouter.get("/companylogout",companylogout);
companyRouter.get("/curcompany",companyauth,curcompany);
module.exports = companyRouter;