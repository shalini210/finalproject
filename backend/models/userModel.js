const connection = require("../connection")
const mongoose = require("mongoose")
const userSchema =new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    }
})
 const User = mongoose.model("user",userSchema)
module.exports = User
// console.log("we will export user from here ")