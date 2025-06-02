const conn = require("./connection")
const express = require("express")
const userRouter = require("./routers/userRouter")
const app = express()
const cors = require("cors")
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>
{
    res.send({msg:"this is api home  use user for users "})
})
app.use("/user",userRouter)
app.listen(8080,console.log("server running on 8080"))
// 