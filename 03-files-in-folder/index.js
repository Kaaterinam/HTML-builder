const fs = require("fs");
const path = require('path');

fs.readdir('secret-folder', { withFileTypes: true }, (err, files) => {
    if (err) {
        console.log(err);
    } else {
        files.forEach(file => {
            const filePath = path.join('secret-folder', file.name);

            if (file.isFile()) {
                const fileName = file.name;
                const fileExtension = fileName.slice(fileName.lastIndexOf('.') + 1);
                const baseName = fileName.slice(0, fileName.indexOf('.'));

                fs.stat(filePath, (err, stats) => {
                    if (err) {
                        console.log(err);
                    } else {
                        const size = stats.size;
                        console.log(`${baseName}-${fileExtension}-${size} байт`);
                    }
                });
            } else if (file.isDirectory()) {
                fs.readdir(filePath, { withFileTypes: true }, (err, innerFiles) => {
                    if (err) {
                        console.log(err);
                    } else {
                        innerFiles.forEach(innerFile => {
                            if (innerFile.isFile()) {
                                const fileName = innerFile.name;
                                const fileExtension = fileName.slice(fileName.lastIndexOf('.') + 1);
                                const baseName = fileName.slice(0, fileName.indexOf('.'));

                                fs.stat(path.join(filePath, fileName), (err, stats) => {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        const size = stats.size;
                                        console.log(`${baseName}-${fileExtension}-${size} байт`);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});
