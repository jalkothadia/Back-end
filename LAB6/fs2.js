const fs = require('fs')


console.log("1. this is the first.")
fs.readFile("info.txt","utf8" , (err,data)=>{
    if(err){
        console.log("Error : ",err)
    }
        console.log(data)
    console.log('inside')
})

console.log("3.this is the ending line")


console.log("1. this is the first.")
const data = fs.readFileSync("info.txt","utf8" , (err)=>{
    if(err){
        console.log("Error : ",err)
    }
    console.log('inside')
})
console.log(data)


console.log("3.this is the ending line")