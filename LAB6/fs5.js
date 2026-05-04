const fs = require('fs')

fs.unlink("output.txt",(err)=>{
    if(err){
        console.log("cannot delete file");
    }else{
        console.log("file deleted successfully");
    }
})