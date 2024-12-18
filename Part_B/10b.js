const http=require("http");
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("Welcome to node");
    }
    else{
        res.writeHead(404,{"content-type": "text/plain"});
        res.end("Error not found");
    }
});

server.listen(8000,()=>{
    console.log("server is running on  port 8000");
})