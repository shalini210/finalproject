
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
