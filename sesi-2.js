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

console.log(typeof [], `<===================  ==================`);
console.log(typeof {},`<===================  ==================`);

let person = {
    name: 'udin',
    height: 170,
    weight: '58kg'
}

const { name: udinName, height } = person

console.log(udinName, height, `<===================  ==================`);

let cars = ['audi', 'bmw', 'cherry']

const [bmw, brandBmw] = cars

const getPerson = () => {
    return {
        name: 'bambang',
        lastName: 'sedunia'
    }
}

const {name: bambangName, lastName} = getPerson()

console.log(bambangName, lastName, `<===================  ==================`);