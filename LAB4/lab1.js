const path = require('path');
const os = require('os');

//// file ----------------------------------------------------------------------------------------------

// console.log('full path of code is :',__dirname);
// console.log('new path : ',path.join('users','arjun','documents','project'))

// const wrongpath = '//folder//subfolder////file.txt';
// const correctpath = path.normalize(wrongpath);
// console.log('correct path is :',correctpath);

// let path1 = 'users/arjun/documents/project'


// if(path.isAbsolute(path1)){
//     console.log('the path is absolute');
// }else{
//     console.log('the path is not absolute');
// }

// console.log('the absolute path is',path.resolve('folder','subfolder','app.js'))



////     OS modules------------------------------------------------------------------------------------



console.log("the type is: ",os.type());
console.log("the version is: ",os.release());
console.log("the platform of your os is: ",os.platform());
console.log("the architecture is: ",os.arch());


// function toGB(bytes){
//     return (bytes/(1024*1024*1024).toFixed(2))
// }

// console.log("the total memory is : ",toGB(os.totalmem()));
// console.log("the free memory is : ",toGB(os.freemem()));


console.log("the user of this system is : ",os.userInfo());

// console.log("the running time is : ",((os.uptime)/3600).toFixed(2))

const cpus = os.cpus()
cpus.forEach((core , index) => {
    console.log(`the index is ${index+1} is core ` , core.model)
});
const network = os.networkInterfaces();
console.log(network);


//// child_process-------------------------------------------------------

// const  child_process = require('child_process')

// const {exec} = require('child_process');
// const { stdout } = require('process');

// child_process.exec("node -v",(error,stdout)=>{
//     if(error){
//         console.error(error.message);
//         return;
//     }
//     console.log('the version of node is' , stdout);
// })

// const cmd = child_process.spawn("cmd",["/c" , "dir"]);

// cmd.stdout.on("data",(data)=>{
//     console.log(`output : ${data}`)
// })

// cmd.stdout.on("data",(data)=>{
//     console.error(`error : ${data}`)
// })

// console.log("current working " , process.cwd);


