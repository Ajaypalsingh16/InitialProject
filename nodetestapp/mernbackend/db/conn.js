const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/form",{
    useNewUrlParser:true,
    useUnifiedTopology:true},
   (error)=>{ if(error) console.log("error aa gai connection me")
    else console.log("connect ho gaya")
})
const sch={
    name:{
        type:String,
        require:true
    },
    uname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phoneNumber:{
        type:Number,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    confirmpassword:{
        type:String,
        require:true
    },
    // date_of_birth:{
    //     type:Date,
    //     require:true
    // },
    gender:{
        type:String,
        require:true
    }
}
const datmodel=new mongoose.model("DETAIL",sch);
module.exports=datmodel