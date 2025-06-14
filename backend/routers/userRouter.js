const express = require("express")
const RegistereduserController = require("../controllers/RegistereduserController")
const registereduser = require("../models/RegistrationModel")
const router = express.Router()
router.post("/login",async (req,res)=>
{
    let d = await RegistereduserController.loginUser(req.body)
    console.log(d)
     res.send(d)
})
router.post("/",async (req,res)=>
{
     
let u = {fullName:req.body.fullName,
    email:req.body.email,
    password:req.body.password,
    contact:req.body.contact
}
let obj = await RegistereduserController.adduser(u)
res.send({msg:obj.msg,users:obj.data})
})
router.get("/",async (req,res)=>
{
    let users =await RegistereduserController.getusers()
    res.send({users:users})
})
router.get("/userbyname/:name",async(req,res)=>
{    
let name = req.params.name
let u =await RegistereduserController.getuserbyName(name)
res.send(u)
})
router.delete("/:id",async (req,res)=>
{
    let id = req.params.id
    let obj = await RegistereduserController.deleteuser(id)
    res.send(obj)
})
router.put("/",async(req,res)=>
{
    let uid = req.body.id;
    console.log(uid)
    let uname = req.body.name;
    let uage = req.body.age;
    let newuser = {name:uname,age:parseInt(uage)}
    // let condition = {_id:uid}
    let obj = await RegistereduserController.updateuser(uid,newuser)
    res.send({msg:obj.msg,users:obj.data})


})
module.exports= router