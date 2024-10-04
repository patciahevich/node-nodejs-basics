import { createHash } from 'crypto';
import path from 'path';
import fs from 'node:fs';

const PATH = path.join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt')

const calculateHash = async () => {

    const readStream = fs.createReadStream(PATH);
    readStream.setEncoding('utf-8');

    const hash = createHash('sha256');

    let dataToHash = ''

    readStream
    .on('data', (chunk) => {
        dataToHash += chunk;

    })
    .on('end', () => {
        console.log(`Hash : ${hash.update(dataToHash).digest('hex')}`)
    })

};

await calculateHash();