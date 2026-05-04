const fs = require('fs')

fs.appendFile('output.txt',"this is the append file " , (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("append successfully");
    }
})