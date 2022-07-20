export class Employee {
    #name
    
    constructor(name) {
        this.#name = name
    }
    
    doWork() {
        return 'complete!'
    }
    
    getName() {
        return this.#name
    }
}

export class Animal {
    constructor(name) {
        this.name = name
    }
    
    walk() {
        return 'jalan dengan kaki'
    }
    
    getName() {
        return this.name
    }
}

class Cat extends Animal {
    constructor(name, lastName) {
        super(name)
        this.lastName = lastName
    }
    walk() {
        return 'lari dengan 4 kaki'
    }
    
    getName() {
        return this.name + ' ' + this.lastName
    }
}

class Rabbit extends Animal {
    walk() {
        return 'lompat'
    }
}

let udin = new Employee('udin')
let bambang = new Rabbit('bambang')
let kitty = new Cat('kitty', 'sedunia')


function Dog(updatedName){
    let name = updatedName
    
    return {
        walk: () => {
            return 'lari'
        },
        getName: function() {
            return name
        }
    }
}


let blacky = new Dog('blacky')
blacky.name = 'test'

export let nilai = 100
export let obj = { nilaiUlangan: nilai }
export let kosongan = null

export function setKosongan() {
    kosongan = 100
}

export default Employee