const { EventEmitter } = require('stream');
const url = require('url')

// const inputURL = 'https://example.com:8090/users/protocol?id=10&name=jal';

// const parsedURL = url.parse(inputURL,true);

// console.log("Protocol : ",parsedURL.protocol);
// console.log("HostName : ",parsedURL.hostname);
// console.log("PathName : ",parsedURL.pathname);
// console.log("Query is : ",parsedURL.query);
// console.log("Port Number : ",parsedURL.port);

// -----------------------------------------------------------------

// const myURL = new URL('https://example.com:8090');
// myURL.pathname = '/user/protocol';

// myURL.searchParams.append("id" , "20");
// myURL.searchParams.append("color","red");

// console.log("My URL is : ",myURL);
// console.log("URL in string : ",myURL.toString());


//-------------------------------------------------------------------

const emitter = new EventEmitter();
let i=0;

emitter.on("greet",()=>{
    console.log("hello from the greet event.");
});

emitter.emit("greet");

setInterval(()=>{
    emitter.emit('tick');
},1);
emitter.on("tick",()=>{
    console.log(i+" tick event occured");
    i++;
})