import { spawn } from 'child_process';
import path from 'path';

const PATH = path.join(import.meta.dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {

    const child = spawn("node", [PATH, ...args]);

    process.stdin.on('data', (data) => {
        child.stdin.write(data)
    })

    child.stdout.on('data', (data) => {
        console.log(data.toString())
    })
};

spawnChildProcess(['--firstArg', '--secondArg', '--nextArg']);
