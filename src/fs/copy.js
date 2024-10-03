import fs from 'node:fs';
import path from 'path';

const SRC = 'files';
const DEST = 'files_copy';

const copy = async () => {
    
    fs.stat(SRC, (err) => {

        if(err) {
            throw new Error('FS operation failed')
        } 

        fs.stat(DEST, (err) => {

            if(err) {

                fs.mkdir(DEST, () => {})
                fs.readdir(SRC, (err, files) => {

                    if (err) throw err

                    files.forEach((file) => {
                        fs.copyFile(path.join(SRC, file), path.join(DEST, file), ()=> {})
                    })
                })
            } else {
                throw new Error('FS operation failed')
            }
        })
    })


};

await copy();
