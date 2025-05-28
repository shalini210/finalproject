 const express = require("express")
 const userController = require("../controllers/userController")
 const router = express.Router()
 router.post("/",(req,res)=>
{
let u = {name:req.body.name,age:req.body.age}
userController.adduser(u)
res.send("user added")
})
module.exports= router