import fs from 'node:fs';
import path from 'path';

const PATH = path.join(import.meta.dirname, './files/fresh.txt');

const create = async () => {

    fs.stat(PATH, (err) => {
        
        if(err) {
            fs.writeFile(PATH, 'I am fresh and young', () => {});
        } else {
            throw new Error('FS operation failed');
        }
    })
};

await create();