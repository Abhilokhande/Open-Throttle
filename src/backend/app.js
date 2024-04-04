const express =require('erpress')
const mongoose = require('mongoose')
const cors = required('cors')

const app =express()
app.use(cors())
app.use(express.json())
app.us(express.urlencoded({extended:true}))

app.get("/login",cors(),(req,res)=>{

})
app.post("/login",async(req,res)=>
{
    const{userName,password}=req.body
    try{
        const check=await collection.findOne({userName:userName})
        
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch{
        res.json("notexist")
    }

})


app.post("/createaccount",async(req,res)=>
{
    const{userName,password,Fname,Lname,Email,City}=req.body

    const data={
        userName:userName,
        password:password,
        Fname:Fname,
        Lname:Lname,
        Email:Email,
        City:City
    }
    try{
        const check=await collection.findOne({userName:userName})
        
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    }
    catch{
        res.json("notexist")
    }

})

app.listen(8000,()=>{
    console.log("port connected");
})  