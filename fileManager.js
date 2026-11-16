// commonJS
import fs from'fs';

function createDirectory(dirPath) {
    return new Promise((resolve, reject) => {
        fs.mkdir(dirPath, { recursive: true }, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`Directory ${dirPath} created successfully.`);
            }
        });
    });
}

function createFile(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`File ${filePath} created successfully.`);
            }
        });
    });
};

function listFiles(dirPath){
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, (err, files) => {
            // readdir e o mesmo que usar ls no terminal, ele lista os arquivos do diretorio
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}

function readFile(filePath){
    return new Promise((resolve, reject) => {
        fs.readFile(filePath,'utf8', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

function writeFile(filePath, content) {
    // Retorna uma Promise que resolve quando o arquivo é escrito
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if (err) {
                reject(err); // Rejeita a Promise em caso de erro
            } else {
                resolve('File written successfully'); // Resolve a Promise indicando sucesso
            }
        });
    });
}

function deleteFile(filePath) {
    // Retorna uma Promise que resolve quando o arquivo é deletado
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                reject(err); // Rejeita a Promise em caso de erro
            } else {
                resolve('File deleted successfully'); // Resolve a Promise indicando sucesso
            }
        });
    });
}

export default {
    createDirectory,
    createFile,
    listFiles,
    readFile,
    writeFile,
    deleteFile
};