const fs = require('fs')

fs.readdir('../LAB6',(err,files)=>{
    if(err){
        console.log("cannot find");
    }else{
        files.forEach(file => {
            console.log(file);
        });
    }
})