
const connection = require("../connection")
const mongoose = require("mongoose")
const userSchema =new mongoose.Schema({
   fullName:String,
   email: String,
     password: String,

     contact: String
})
 const registereduser= mongoose.model("registereduser",userSchema)
module.exports = registereduser
// console.log("we will export user from here ")