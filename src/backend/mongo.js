const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/admin")
.then(()=>{
    console.log('connected');
})
.catch(()=>{
    console.log("failed");

})
const newSchema=new mongoose.Schema({
   userName:{
    type:String,
    required:true
   },
   password:{
    typr:String,
    required:true
   }   
})
const collection =mongoose.model("collection",newSchema)
model.exports=collection