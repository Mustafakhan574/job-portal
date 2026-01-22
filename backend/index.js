const express = require("express");
const env = require("dotenv");
const mongoconnect = require("./config/db");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/usersroute");
const cors = require("cors")
const companyRouter = require("./routes/companyroute");
const companypostRouter = require("./routes/companypostroute");
env.config();
let app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
          origin:["http://localhost:5173","http://localhost:5174","http://localhost:5175"],
          credentials:true
}))
app.use("/users",userRouter)
app.use("/company",companyRouter)
app.use("/posts",companypostRouter)
let port = process.env.PORT || 3001;
app.listen(port,()=>{
          console.log(`http://localhost:${port}`)
          mongoconnect();
})