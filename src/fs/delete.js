import fs from 'node:fs';
import path from 'path';

const PATH = path.join(import.meta.dirname, 'files');
const fileName = 'fileToRemove.txt';

const remove = async () => {
    
    fs.stat(path.join(PATH, fileName), (err) => {
        if(err) {
            throw new Error('FS operation failed');
        }
        fs.unlink(path.join(PATH, fileName), () => {});
    })
};

await remove();