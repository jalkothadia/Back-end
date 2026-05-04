const fs = require('fs')

fs.writeFile("output.txt","this txt is from the write file",(err)=>{
    if(err){
        console.log("Error : ",err)
    }else{
        console.log("file written successfully");
    }
})