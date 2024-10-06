import { Worker, workerData } from 'node:worker_threads';
import path from 'path';

const PATH = path.join(import.meta.dirname, 'main.js');

const performCalculations = async () => {
    
    const worker = new Worker(PATH, {
        workerData: 2
    })

};

await performCalculations();