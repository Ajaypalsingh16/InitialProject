const express= require("express");
const app =express()
const mongoose=require("mongoose");
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/mynewdb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(!err){
        console.log("connected to db");
    }else{
        console.log("error");
    }
})

const sch={
    name:String,
    email:String,
    mobno:Number,
    id:Number
}
 const monmodel= mongoose.model("NEWCOL",sch);

 app.post("/post",async(req,res)=>{
    console.log("inside post function");
    const data=new monmodel({
        name:req.body.name,
        email:req.body.email,
        mobno:req.body.mobno,
        id:req.body.id
    })
    const dev=await data.save();
    res.json(dev);
   // res.send("posted");
 })

app.listen(4000,()=>{
    console.log("on port 4000");
})