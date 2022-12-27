const express = require("express");
const path=require("path");
const app = express();
const ejs=require("ejs");
const datmodel = require("./db/conn");
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"./template/views");
const partials_path = path.join(__dirname," ./template/partials");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//console.log(path.join(__dirname,"../public"));
app.use(express.static(static_path))
app.set("view engine",'ejs'); 
app.set("views",template_path);
app.use(express.static(__dirname + '/public'));
// ejs.registerPartials(partials_path)
app.get("/",(req,res)=>{
    res.render("index")
});
 app.post("/register",(req,res)=>{
     console.log(req.body)
     try{
        const password=req.body.password;
        const cpassword=req.body.confirmpassword;
        if(password===cpassword){

        }
        else{
            res.send("password are not match")
        }
     }catch(error){
        res.status(400).send(error);
     }
    // let onbj = {name:req.body.name,
    // username:req.body.username,
    // email:req.body.emai,
    // phonenumber:req.body.phonenumber,
    // password:req.body.password,
    // }

    datmodel.create(req.body)
    
 //res.json(tra);
 res.send("posted");
 });
 
app.listen(port,()=>{
    console.log(`serveer is running at port no ${port}`)
})
