
const key = 'RSS_'

const parseEnv = () => {

    const result = Object.entries(process.env).filter((item) => {
        return item[0].startsWith(key)
    });

    console.log(`${result[0].join('=')}; ${result[1].join('=')}`)

}

parseEnv();