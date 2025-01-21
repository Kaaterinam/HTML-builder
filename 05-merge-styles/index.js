const fs = require('fs');
const path = require("path");
const sourceDir='styles'
const targetFile='bundle.css'
const targetDir='project-dist'
let content='';

function source(){
    // fetch
}
promise(source).then((data)=>{
    return data
})



copyFiles(()=>{

})
function copyFiles() {
    fs.readdir(sourceDir, function(err, files){
        const filesList = files.filter(function(e){
            return path.extname(e).toLowerCase() === '.css'
        });
        function fileHandler(){
            fs.open('project-dist/bundle.css','w',(err)=> {
                if (err) throw err
            })
        }
        fileHandler()
        const readWrite = (pathStr) => {
            return fs.readFile(path.join(sourceDir,pathStr),'utf8',(err,data)=> {
                if (err) throw err;
                return data + '\n'
            })
        }
        const array=filesList.map(file)
        Promise.all()
    });
    // console.log(filesList)
    // const readPromises = filesList.map(file => {
    //     const filePath = path.join(sourceDir, file);
    //     return new Promise((resolve, reject) => {
    //         fs.readFile(filePath, 'utf-8', (err, data) => {
    //             if (err) {
    //                 reject(`Ошибка чтения файла ${file}: ${err}`);
    //             } else {
    //                 console.log(`Содержимое файла ${file}:`, data);
    //                 content += data + '\n';
    //                 resolve();
    //             }
    //         });
    //     });
    // });
    };


