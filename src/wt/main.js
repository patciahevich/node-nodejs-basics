import { Worker, workerData } from 'node:worker_threads';
import path from 'path';
import os from 'node:os';

const PATH = path.join(import.meta.dirname, 'worker.js');

const performCalculations = async () => {

    const coresNumber = os.cpus().length
    const initialNumber = 10;

    function createWorker(number) {
        return new Promise((resolve, reject) => {

            const worker = new Worker(PATH, {
                workerData: number,
            })

            worker.on('message', (message) => {
                resolve(message)
            });

            worker.on('error', (message) => {
                reject(message)
            });
        })
    }

    function createAllWorkers() {
        const promises = [];

        for (let i = 0; i < coresNumber; i++) {
            promises.push(createWorker(initialNumber + i));
        }

        return promises;
    }

    Promise.allSettled(createAllWorkers())
    .then((results) => {
        return results.map((item) => {

            if(item.status === 'fulfilled') {
                return {
                    status: 'resolved',
                    data: item.value
                }
            } else {
                return {
                    status: 'error',
                    data: null
                }
            }
        })
    })
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        throw err;
    })

};

await performCalculations();