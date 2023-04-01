// Type Aliases - Type Aliases are a way to give a name to a type.
// They are useful when you want to give a name to a complex type
// or when you want to reuse a type in multiple places.

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]


type Guitarist = {
    name?: string,
    active: boolean, // Optional with a ?
    albums: stringOrNumberArray // already defined above
}

type UserId = stringOrNumber


// Literal Types

let myName: 'Devin'

let userName: 'Dave' | 'John' | 'Amy'


// Functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any) => {
    console.log(message)
}

logMsg('Hello World')
logMsg(add(2,3))
logMsg(add(7, 4))


let subtract = function (c:number, d:number): number {
    return c - d
}

type mathFunction = (a: number, b:number) => number

// interface mathFunction {
//     (a: number, b:number): number
// }


let multiply: mathFunction = function (c,d) {
    return c * d
}

// optional parameters

const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}


// default parameter value
const sumAll = (a: number, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(2,3,2))
logMsg(sumAll(2,3,))


// Rest Parameters

const total =  (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1,2,3))


const createError = (errMsg: string) => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}


// use of never type
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string' // Type Guard
    if (typeof value === 'number') return 'number' // Type Guard
    return createError('This should never happen')

}
