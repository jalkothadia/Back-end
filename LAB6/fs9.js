const fs = require('fs')

    if(fs.existsSync("backup.txt")) {
        console.log("exists file")
    }
    else{
        console.log('cannot find file')
    }
