const conn = require("./connection")
const express = require("express")
const userRouter = require("./routers/userRouter")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>
{
    res.send("this is api home \n use /user for users ")
})
app.use("/user",userRouter)
app.listen(8080,console.log("server running on 8080"))
// 