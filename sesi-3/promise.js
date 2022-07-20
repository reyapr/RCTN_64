import axios from 'axios'
import fetch from 'node-fetch'

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const isSuccess = false
        
        if(isSuccess) {
            resolve('Hi your request is success')
        } else {
            reject('Sorry we have a problem now')
        }
    }, 2000)    
})


myPromise
    .then((res) => {
        // console.log(res, `<=================== response ==================`);
    })
    .catch((err) => {
        // console.log(err, `<=================== err ==================`);
    })
   
axios('https://swapi.dev/api/people')
    .then(res => {
        return res.data.results
            .filter(person => person.height > 150)
            .map(person => ({ name: person.name.name.name, height: person.height }))
    })
    .then(res => {
        // console.log(res, `<=================== res ==================`);
    })
    .catch(err => {
        // console.log(err, `<=================== err ==================`);
    })
    
    
const getData = async () => {
    const response = await axios.get('https://swapi.dev/api/people')
    const filteredPerson = response.data.results
        .filter(person => person.height > 150)
        .map(person => ({ name: person.name, height: person.height }))
    console.log(filteredPerson, `<=================== response ==================`);
    
}
    
getData()
let num1 = 1
let num2 = 2
let result = num1 + num2

console.log(result, `<===================  ==================`);