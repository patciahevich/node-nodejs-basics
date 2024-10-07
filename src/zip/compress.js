import fs from 'node:fs';
import path from 'path';
import { createGzip } from 'node:zlib';

const SRC = path.join(import.meta.dirname, 'files', 'fileToCompress.txt');
const DEST = path.join(import.meta.dirname, 'files', 'archive.gz');


const compress = async () => {
    
    const source = fs.createReadStream(SRC);
    const result = fs.createWriteStream(DEST);

    const gzip = createGzip();

    source
    .pipe(gzip)
    .pipe(result)
    .on('error', (err) => {throw err});

    result.on('finish', () => {
        fs.unlink(SRC, () => {
            console.log('Original file deleted.')
        });
    })
};

await compress();