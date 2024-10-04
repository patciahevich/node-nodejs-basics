import fs from 'node:fs';
import path from 'path';

const PATH = path.join(import.meta.dirname, 'files', 'fileToWrite.txt');


const write = async () => {

    const writeStream = fs.createWriteStream(PATH)
    console.log('Hello! Write some text! \n(to exit press Ctrl + C) \n')

    process.stdin.on('data', (data) => {
        writeStream.write(`${data} \n`)
    })
};

await write();