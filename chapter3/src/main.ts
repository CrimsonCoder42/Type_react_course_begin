let stringArr = ['one', 'hey', 'Dave'];

let guitars = ['Start', 'les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('Doe')

guitars[0] = 1984
guitars.unshift('Jim')

guitars = stringArr // Works only if the types are the same.

let test=  []
let bands: string[] = []
bands.push('Van Halen')

// Tuple
let myTuple: [string, number, boolean] = ['Devin', 40, true]

let mixed = ['John', 1984]

// objects
let myObj: object

myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
}

exampleObj.prop1 = 'John'

interface Guitarist {
    name?: string,
    active: boolean, // Optional with a ?
    albums: (string | number)[] // Union type
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812', 'For Unlawful Carnal Knowledge']
}


let JP: Guitarist = {
    name: 'Jimmy',
    active: false,
    albums: ['I', 'II', 'IV']
}


const greetGuitartist = (guitarists: Guitarist) => {
    if (guitarists.name) {
        return `Hello ${guitarists.name.toUpperCase()}!`
    }
    return `Hello!`
}




// Enums

enum Grade {
    U,
    D,
    C,
    B,
    A,
}

console.log(Grade.A)
