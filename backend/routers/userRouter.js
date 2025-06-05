const express = require("express")
const userController = require("../controllers/userController")
const router = express.Router()
router.post("/",(req,res)=>
{
let u = {name:req.body.name,age:parseInt(req.body.age)}
userController.adduser(u)
res.send({msg:"user added"})
})
router.get("/",async (req,res)=>
{
    let users =await userController.getusers()
    res.send({users:users})
})
router.get("/userbyname/:name",async(req,res)=>
{    
let name = req.params.name
let u =await userController.getuserbyName(name)
res.send(u)
})
router.delete("/:id",async (req,res)=>
{
    let id = req.params.id
    let msg = await userController.deleteuser(id)
    res.send(msg)
})
router.put("/",async(req,res)=>
{
    let uid = req.body.id;
    console.log(uid)
    let uname = req.body.name;
    let uage = req.body.age;
    let newuser = {name:uname,age:parseInt(uage)}
    // let condition = {_id:uid}
    let msg = userController.updateuser(uid,newuser)
    res.send(msg)


})
module.exports= router