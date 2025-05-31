
const userModel = require("../models/userModel")

exports.adduser=(user)=>
{
    let newuser = new userModel({
        name:user.name,
        age:user.age
})
newuser.save()
.then(()=>console.log("user saved"))
.catch(()=>console.log("err"))
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
//    await userModel.findByIdAndDelete(id)
    await userModel.deleteOne({_id:id})
    .then((d)=>msg = d)
    .catch((err)=>msg = err)
    return msg 
}
exports.updateuser = async(id,newdata)=>
{
    let msg = "";
    console.log(id)
    await userModel.findByIdAndUpdate(id,newdata)
    .then((d)=>msg = d)
    .catch((err)=>msg = err)
    return msg 
}