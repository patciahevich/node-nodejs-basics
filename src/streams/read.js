import fs from 'node:fs';
import path from 'path';

const PATH = path.join(import.meta.dirname, 'files', 'fileToRead.txt')

const read = async () => {
    const readStream = fs.createReadStream(PATH);

    readStream.on('data', (chunk) => {
        process.stdout.write(`${chunk} \n`)
    })
};

await read();