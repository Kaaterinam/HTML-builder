const fs= require('fs');
const path= require('path');
const readline = require('node:readline');
const {
    stdin: input,
    stdout: output
}=require('node:process');
function fileHandler(){
    fs.open('writeText.txt','w',(err)=> {
        if (err) throw err
    })
}
fileHandler()
const rl = readline.createInterface({ input, output });
const rl1=function (){
    rl.question('Введите текст',(answer)=> {
        fs.appendFile(path.resolve('writeText.txt'),answer,(err)=> {
            if (err) throw err
        })
        rl1()
    })
}

rl1()
process.on('exit', () => {
    console.log('\nЗавершаем программу');
    rl.close();
    // process.exit(0);
});

