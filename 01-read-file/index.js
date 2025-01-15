const fs=require('fs')
const path=require('path')
fs.readFile(path.resolve('text.txt'),'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data)
})