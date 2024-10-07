
const key = 'RSS_'

const parseEnv = () => {

    const result = Object.entries(process.env)
        .filter((item) => {
            return item[0].startsWith(key)
        })
        .map((item) => item.join('='))
        .join('; ');

    console.log(result);

}

parseEnv();