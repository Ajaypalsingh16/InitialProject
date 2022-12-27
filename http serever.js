const res = require("express/lib/response");
const { fstat } = require("fs");
const http = require("http");
const server= http.createServer((req,res)=>{
    console.log("req method : ",req.method)
    let university="rajasthan university";
    let form={university:university,college:"maharaja college",class:"BCA"}
    res.end(JSON.stringify(form));
});
server.listen(7000,"127.0.0.1", ()=>{
    console.log("go to the port number 7000");
})