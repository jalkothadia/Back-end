const fs = require('fs')

fs.watch("backup.txt",(eventType)=>{
    if(eventType){
        console.log("there is a change in file",eventType)
    }
})
