
const userModel = require("../models/userModel")

exports.adduser=async (user)=>
{
    let newuser = new userModel({
        name:user.name,
        age:user.age
})
let data = []
let msg = ""
await newuser.save()
.then(async ()=>{
    msg = "record inserted"
    await userModel.find()
    .then((d)=>data = d)
}
)
.catch((err)=>msg = err)

return {data:data,msg:msg}
}
exports.getusers =async ()=>
{
    let users = [];
    await userModel.find()
    .then((d)=>{
        console.log(d)
        users = d
    })
    return users
}
exports.getuserbyName =async (uname)=>
{
    let r ;
    await userModel.findOne({name:uname})
    .then((d)=>r = d)
    .catch(()=>r="err")
    return r;
}
exports.deleteuser =async (id)=>
{
    let msg = ""
    let data = []
//    await userModel.findByIdAndDelete(id)
    await userModel.deleteOne({_id:id})
   .then(async ()=>{
    msg = "record deleted"
    await userModel.find()
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
    await userModel.findByIdAndUpdate(id,newdata)
    .then(async (d)=>
        {
           msg = "record updated"
            await userModel.find()
            .then((d)=>data = d)
        })
    .catch((err)=>msg = err)
    
return {data:data,msg:msg}
}