const mongoose=require("mongoose");
// const dbConnection = async (DB_URI) =>{

try{
    const conn =  mongoose.connect("mongodb://localhost:27017/Newstudent/info")
    if(conn){
        console.log("Connection Done!")
    }
}catch(error)
{
console.log("Connection Failed!" , error)
};

const detail=new mongoose.Schema({
    name:{
        type:String,
        required:true},
    email:{
        type:String,
        required:true},
    mobileno:{
        type:Number,
        required:true},
        activate:Boolean,
    dob:{
        type:Date,
        default:Date.now
    }
})
const Raminfo=new conn({
    name:"Ram",
    email:"ram@gmail.com",
    mobileno:9876543210,
        activate:true,
    dob:02-04-1998
})
Raminfo.save();



//  }

// module.exports = dbConnection;




// mongoose.connect("",{
//     // useNewUrlparser:true,
//     // useUnifiedTopology:true,
//     // useCreateIndex:true
// }).then(()=>{
//     console.log(`connection successful`);
// }).catch((e)=>{
// console.log(`no connection`);
// })