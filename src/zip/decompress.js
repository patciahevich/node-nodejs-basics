import fs from 'node:fs';
import path from 'path';
import { createUnzip } from 'node:zlib';

const SRC = path.join(import.meta.dirname, 'files', 'archive.gz');
const DEST = path.join(import.meta.dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
    
    const source = fs.createReadStream(SRC);
    const result = fs.createWriteStream(DEST);

    const unzip = createUnzip();

    source
    .pipe(unzip)
    .pipe(result)
    .on('error', (err) => {throw err});

    result.on('finish', () => {
        fs.unlink(SRC, () => {
            console.log('Decompression complete.')
        });
    })
};

await decompress();