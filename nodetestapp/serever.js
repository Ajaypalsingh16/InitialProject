const http=require("http");
const mongo=require("./mongo")
const server=http.createServer(async (req,res)=>{
    console.log("Req method : ",req.method)
    let name="cp";
    let jsonRes =JSON.stringify( await mongo.getdata())
    res.end(jsonRes);
});
server.listen(9000,"127.0.0.1" , ()=>{
console.log("listening to the port number 9000");
})