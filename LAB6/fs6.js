const fs = require('fs')

fs.mkdir('my-data',(err)=>{
    if(err){
        console.log('cannot create folder')
    }else{
        console.log('folder created successfully')
    }
})