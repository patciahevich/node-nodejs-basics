const parseArgs = () => {

    const args = process.argv
    .slice(2)
    .reduce(((acc, item, index, arr) => {

        if(item.startsWith('--')) {
            item = `${item.slice(2)} is `
        } else {

            if(index !== arr.length - 1) {
                item = `${item}, `
            }
        }

        return acc += `${item}`

    }), '')

    console.log(args)
};

parseArgs();