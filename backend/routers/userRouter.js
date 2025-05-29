const express = require("express")
const userController = require("../controllers/userController")
const router = express.Router()
router.post("/",(req,res)=>
{
let u = {name:req.body.name,age:req.body.age}
userController.adduser(u)
res.send("user added")
})
router.get("/",async (req,res)=>
{
    let users =await userController.getusers()
    res.send(users)
})
router.get("/userbyname/:name",async(req,res)=>
{    
let name = req.params.name
let u =await userController.getuserbyName(name)
res.send(u)

})
module.exports= router