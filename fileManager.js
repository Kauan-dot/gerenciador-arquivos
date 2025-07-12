import fs from 'fs';

function createDirectory(dirPath) {
    return new Promise((resolve, reject) => {
        fs.mkdir(dirPath, { recursive: true }, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`Directory '${dirPath}' created successfully`);
            }
        });
    })
}

function createFile(filePath, content = '') {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`File '${filePath}' created successfully`);
            }
        });
    })
}

function listFiles(dirPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    })
}

function readFiles(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
}

function writeFiles(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, content, 'uft8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('File written successfully');
            }
        });
    })
}

function deleteFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('File deleted successfully');
            }
        });
    })
}

export default {
    createDirectory,
    createFile,
    listFiles,
    readFiles,
    writeFiles,
    deleteFile
};