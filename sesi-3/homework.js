const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]

const makeAllCaps = (arr) => {
    return new Promise((resolve, reject) => {
        try {
            const result = arr.map(word => word.toUpperCase())
            resolve(result)
        } catch (err) {
            reject(err)
        }
    })
}

const sortOfWords = (arr) => arr.sort()

makeAllCaps(arrayOfWords)
    .then(sortOfWords)
    .then(res => {
        console.log(res, `<=================== res ==================`);
    })
    .catch(err => {
        console.log(err, `<=================== err ==================`);
    })

try {
    const capOfWords = await makeAllCaps(complicatedArray) 
    const sortedWords = sortOfWords(capOfWords)
    console.log(sortedWords, `<=================== res ==================`);
} catch (error) {
    console.log(error, `<=================== err ==================`);
}