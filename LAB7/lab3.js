const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{

    if(req.url == '/about'){
        fs.readFile("about.txt","utf8",(err,data)=>{
        if(err){
            console.log("Error : ",err)
        }
        else{
            res.end(data)
        }
    });
    }
    


     if(req.url == '/content'){
        fs.readFile("content.txt","utf8",(err,data)=>{
        if(err){
            console.log("Error : ",err)
        }
        else{
            res.end(data)
        }
    });
    }
    
})

server.listen(3002,()=>{
    console.log('server started');
})