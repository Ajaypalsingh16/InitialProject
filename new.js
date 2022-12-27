var harry=require("./new2");
console.log("hello world",harry)
const http=require("http");
const server=http.createServer((req,res)=>{
    console.log("Req method : ",req.method)
    let name="cp";
    let jsonRes = {name:name,dob:"20/01/2001",email:"ajay@gmail.com"}
    res.end("<h1>co</h1><img src='https://picsum.photos/200' />");
});
server.listen(9000,"127.0.0.1" , ()=>{
console.log("listening to the port number 9000");
})


// Server.listen(port?: number | undefined, hostname?: string | undefined, backlog?: number | undefined, listeningListener?: (() => void) | undefined): this

// Start a server listening for connections. A net.Server can be a TCP or an IPC server depending on what it listens to.