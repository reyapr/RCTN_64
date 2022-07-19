// Object

let brandCars = ['audi', 'bmw']
let student = {
    name: 'udin',
    weight: '50kg',
    cars: brandCars,
    pen: {
        brand: 'standard',
        color: 'red'
    }
}

let students = [student, {name: 'bambang'}]
const name = student.name
student.height = 170

let nameKey = 'name'
student.cars.push('hyundai')

student[2] = '2'
student[0] = '0'

// Function
let num1 = 1
let num2 = 2

let num3 = 3
let num4 = 4

let nums = [1,2,3]

const show = () => {
    console.log('muncul')
}

// setTimeout(show, 2000)
function sum(var1, var2) {
   return var1 + var2
}

const result = sum(num1, num2)

const add = function(nums, sumCallback) { // [], function sum() {}
    return sumCallback(nums[0], nums[1])
}

const showMessage = (message) => {
    console.log(message)
}

const addResult = add([1,2], sum)
const sumImplicitReturn = (num1, num2) => num1 + num2

add([2,3], sum)
// showMessage('hello')
// console.log(sumImplicitReturn(1,2), `<===================  ==================`);

// console.log(typeof [], `<===================  ==================`);
// console.log(typeof {},`<===================  ==================`);

let person = {
    name: 'udin',
    height: 170,
    weight: '58kg'
}

const { name: udinName, height } = person

// console.log(udinName, height, `<===================  ==================`);

let cars = ['audi', 'bmw', 'cherry']

const [bmw, brandBmw] = cars

const getPerson = () => {
    return {
        name: 'bambang',
        lastName: 'sedunia'
    }
}

const {name: bambangName, lastName} = getPerson()

// console.log(bambangName, lastName, `<===================  ==================`);



let counter = {
    num: 0,
    add: function() {
        console.log(this, '<======this======')
    }
}

this.test = 'test'
function normalFunction() {
    console.log(this, `<=================== norm  ==================`);
}

const arrow = () => {
    console.log(this, `<=================== arrow ==================`);
}

function Counter() {
    this.val = 0
    
    setTimeout(() => {
        console.log(this, `<=================== arrow  ==================`);
    }, 1500)
}

function Counter2() {
    this.val = 0
    
    setTimeout(function() {
        console.log(this, `<=================== non arrow  ==================`);
    }, 1500)
}

// Counter2()
// Counter()


const tambah = (num1, num2) => num1 + num2

const jumlah = (arr) => {
    const num1 = arr[0] * 2
    const num2 = arr[1] * 3
    
    return (param3) => {
        return num1 + num2 + param3
    }
}

const res = jumlah([2,1])(4)

const animals = [
    {name: 'fluffy', species: 'cat'},
    {name: 'carlo', species: 'cat'},
    {name: 'sweety', species: 'fish'},
    {name: 'bruno', species: 'dog'},
]

let getAnimalNames = (animals) => {
    let animalNames = []
    for (let i=0;i<animals.length;i++) {
        animalNames.push(animals[i].name)
    }
    return animalNames
}

let getAnimalNamesMap = animals => animals
    .filter(animal => animal.species === 'cat')
    .map(animal => animal.name)
    
let orders = [
    {total: 100},
    {total: 200},
    {total: 300}
]

let getTotal = (arr) => {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].total
    }
    
    return total
}

let getTotalReduce = (arr) => 
    arr.reduce((acc, order) => acc + order.total, 0)

console.log(getTotalReduce(orders), `<===================  ==================`);
