import fs from 'node:fs';
import path from 'path';

const PATH = path.join(import.meta.dirname,  'files');

const list = async () => {
    
    fs.stat(PATH, (err) => {

        if(err) {
            throw new Error('FS operation failed');
        }

        fs.readdir(PATH, (err, files) => {
            
            if(err) throw err;

            console.log('Files in the folder:')
            files.forEach((file) => {
                console.log(file)
            })
        })
    })
};

await list();