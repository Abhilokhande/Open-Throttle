const mongoose=require('mongoose')
 const UserSchema=new mongoose.Schema({
    Fname:String,
    Lname:String,
    Email:String,
    City:String,
    UserName:String
 })
 const BookingModel = mongoose.model("Book",UserSchema)
 module.exports=BookingModel