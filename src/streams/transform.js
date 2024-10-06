import { Transform } from 'node:stream';


const transform = async () => {

    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, `Reversed: ${chunk.reverse()}\n`) 
        }
    })

    console.log('Hello! Write some text! \n(to exit press Ctrl + C) \n')

    process.stdin.pipe(transformStream).pipe(process.stdout)
};

await transform();