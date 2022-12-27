const express = require("express");
const fs = require("fs");
//const { route } = require("express/lib/application");
const app = express();
const bodyParse = require("body-parser");
const e = require("express");
app.use(bodyParse.json());
const port = 9000;
const student = [];
app.get("/api/", (req, res) => {
  res.send("hello world");
});
app.get("/api/about", (req, res) => {
  res.send({
    id: 1,
    Name: "binod",
  });
});
app.post("/api/student", (req, res) => {
  console.log(req.body);
  if (!req.body.email) {
    res.status(400);
    res.json({ error: "email is required" });
  }
  const user = {
    id: student.length + 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
  };
  student.push(user);
  //res.json(user)
  fs.appendFile("student.txt", JSON.stringify(user) + ",\n", (error) => {
    if (error) console.log("error occured");
    res.send(user);
  });
});

app.get("/api/student", (req, res) => {
  console.log(req.body);
  if (!req.body.email) {
    res.status(400);
    res.json({ error: "email is required" });
  }
  const user = {
    id: student.length + 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
  };
  student.push(user);
  res.json(user);
  fs.readFile("student.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    res.send(data);
  });
 
});
app.put("/api/student/:id", (req, res) => {
    let id = req.params.id;
    let first_name= req.body.first_name;
    let last_name= req.body.last_name;
    let email= req.body.email
    
    let index = student.findIndex((student)=>{
        return(student.id==Number.parseInt(id))
    })
    if(index>0){
        let std=student[index]
        std.first_name=first_name
        std.last_name=last_name
        std.email=email
        res.JSON(std)
    }
    else{
        res.status(404)
    }
    // console.log(id);
    // res.send(id);
  });

app.listen(port, () => {
  console.log(`listing to the port no${port}`);
});
