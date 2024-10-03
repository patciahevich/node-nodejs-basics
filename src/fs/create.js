import fs from 'fs';

const PATH = './files/fresh.txt';

const create = async () => {
    // Write your code here 
    fs.stat(PATH, (err) => {
        
        if(err) {
            fs.writeFile(PATH, 'I am fresh and young', () => {})
        } else {
            throw new Error('FS operation failed')
        }
    })
};

await create();