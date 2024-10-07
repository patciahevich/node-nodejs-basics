import fs from 'node:fs';
import path from 'path';

const oldName = 'wrongFilename.txt';
const newName = 'properFilename.md';
const PATH = path.join(import.meta.dirname, 'files');

const rename = async () => {
    
    fs.stat(path.join(PATH, oldName), (err) => {

        if(err) {
            throw new Error('FS operation failed');
        }

        fs.stat(path.join(PATH, newName), (err) => {
            if(!err) {
                throw new Error('FS operation failed');
            }
            fs.rename(path.join(PATH, oldName), path.join(PATH, newName), () => {} );
        })

      
    })
};

await rename();