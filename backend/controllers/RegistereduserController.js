
const registereduserModel = require("../models/RegistrationModel")

exports.adduser=async (user)=>
{
    let newuser = new registereduserModel({
          fullName:user.fullName,
   email: user.email,
     password:user.password,

     contact: user.contact
        
})
let data = []
let msg = ""
await newuser.save()
.then(async ()=>{
    msg = "record inserted"
    await registereduserModel.find()
    .then((d)=>data = d)
}
)
.catch((err)=>msg = err)

return {data:data,msg:msg}
}


exports.loginUser=async(user)=>
{
    let msg = "login failed"
    let condition = {email:user.email,password:user.password}
    await registereduserModel.findOne(condition)
    .then((d)=>{
        if(d)
        {
            msg = "login Successfully"
        }
   })
   console.log(msg)
    return {msg:msg }
}
exports.getusers =async ()=>
{
    let users = [];
    await registereduserModel.find()
    .then((d)=>{
        console.log(d)
        users = d
    })
    return users
}
exports.getuserbyName =async (uname)=>
{
    let r ;
    await registereduserModel.findOne({name:uname})
    .then((d)=>r = d)
    .catch(()=>r="err")
    return r;
}
exports.deleteuser =async (id)=>
{
    let msg = ""
    let data = []
//    await userModel.findByIdAndDelete(id)
    await registereduserModel.deleteOne({_id:id})
   .then(async ()=>{
    msg = "record deleted"
    await registereduserModel.find()
    .then((d)=>data = d)
}
)
.catch((err)=>msg = err)
    return {msg:msg,users:data }
}
exports.updateuser = async(id,newdata)=>
{
    let msg = "";
    console.log(id)
    let data = []
    await registereduserModel.findByIdAndUpdate(id,newdata)
    .then(async (d)=>
        {
           msg = "record updated"
            await registereduserModel.find()
            .then((d)=>data = d)
        })
    .catch((err)=>msg = err)
    
return {data:data,msg:msg}
}