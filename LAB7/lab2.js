const http = require('http')

const server = http.createServer((req,res)=>{
        
    res.setHeader('Content-Type', 'text/html');
    if(req.url === '/about'){
        res.end("<p>this is the ABOUT page</p>")
    }
    if(req.url === '/home'){
        res.end("<p>this is the HOME page</p>")
    }
    if(req.url === '/contact'){
        res.end("<p>this is the CONTACT page</p>")
    }
    if(req.url === '/help'){
        res.end("<p>this is the HELP page</p>")
    }
    if(req.url === '/user'){
        res.end("<p>this is the USER page</p>")
    }


})

server.listen(3001,()=>{
    console.log('server started')
})