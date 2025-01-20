const fs = require('fs');
const path = require("path");

const sourceDir = 'files';
const targetDir = 'newFiles';

function removeAndCreateNewFolder() {
    fs.rm(targetDir, { recursive: true, force: true }, (err) => {
        if (err) {
            console.log('Ошибка', err);
        } else {
            fs.mkdir(targetDir, { recursive: true }, (err) => {
                if (err) {
                    console.log("Ошибка", err);
                }
            });
        }
    });
}

function copyFiles() {
    fs.readdir(sourceDir, { withFileTypes: true }, (err, files1) => {
        if (err) {
            console.log('Ошибка files', err);
            return;
        }

        files1.forEach(file => {
            const filePath = path.join(sourceDir, file.name);
            const newFilePath = path.join(targetDir, file.name);

            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.log("Ошибка stats", err);
                    return;
                }

                if (stats.isFile()) {
                    fs.copyFile(filePath, newFilePath, (err) => {
                        if (err) {
                            console.log(`Ошибка ${file.name}:`, err);
                        } else {
                            fs.readFile(filePath, (error, data) => {
                                if (error) {
                                    console.log("Ошибка чтения файла", error);
                                } else {
                                    console.log("Содержимое файла", data.toString());
                                }
                            });
                        }
                    });
                }
            });
        });
    });
}

fs.access(sourceDir, fs.constants.F_OK, (err) => {
    if (err) {
        console.log(` '${sourceDir}'не найдена`);
        return;
    }

    removeAndCreateNewFolder();
    copyFiles();
});

fs.watch(sourceDir, { recursive: true }, (eventType, filename) => {
    if (filename) {
        console.log(`Изменения в ${filename}`);
        removeAndCreateNewFolder();
        copyFiles();
    }
});
