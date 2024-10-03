import fs from 'node:fs';
import path from 'path';

const PATH = path.join('files', 'fileToRead.txt');

const read = async () => {
    fs.stat(PATH, (err) => {

        if(err) {
            throw new Error('FS operation failed')
        }

        fs.readFile(PATH,  'UTF-8', (err, data) => {

            if(err) throw err;

            console.log(data)
        })
    })
};

await read();