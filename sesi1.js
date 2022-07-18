// let score
// console.log(score, `<=================== score var declaration ==================`);

// score = 100
// console.log(score, `<=================== score assignment ==================`);

// score = 90
// console.log(score, `<=================== score re assignment ==================`);

let studentName = 'Udin'
let longStudentName = 'Sedunia'
let num = 1

// console.log(`${studentName}-${longStudentName}-${num * 20}`, `<===================  ==================`);


num = num + 3 // => num += 3


let isValid = !false
// console.log(10 === '10', `<===================  ==================`);

let carNames = new Array('honda', 'toyota', 'jeep', 'hyundai')

let numbers = new Array(5, 1)

let nums = [5]
let duplicateCarNames = ['honda', 'toyota', 'jeep', 'hyundai']
duplicateCarNames.push('hyundai', 'toyota')
duplicateCarNames.unshift('wuling')
duplicateCarNames[5] = 'bmw'
let concatCarNames = [...duplicateCarNames, ...carNames]

// console.log(carNames.slice(1, 3), `<===================  ==================`);
// console.log(carNames.slice(-2), `<=================== minus ==================`);
// console.log(carNames.slice(1, -1), `<=================== minus ==================`);
// console.log(carNames, `<=================== carnames ttep utuh ==================`);

console.log(carNames.splice(1, 2, 'audi', 'ford'), `<=================== spliced CarNames ==================`);
console.log(carNames, `<===================  ==================`);

let table = [
    ['name', 'lokasi', 'usia', 'cars'],
    ['Udin', 'sumedang', '33', ['honda', 'mazda']],
    ['Bambang', 'jakarta', '25', ['audi', 'bmw']]
]

table[3].push(['Bambang Sedunia', 'bandung', ['wuling']])

let mobilKorea = ['hyundai', 'kia']