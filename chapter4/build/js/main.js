"use strict";
// Type Aliases - Type Aliases are a way to give a name to a type.
// They are useful when you want to give a name to a complex type
// or when you want to reuse a type in multiple places.
// Literal Types
let myName;
let userName;
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello World');
logMsg(add(2, 3));
logMsg(add(7, 4));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number, b:number): number
// }
let multiply = function (c, d) {
    return c * d;
};
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default parameter value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(sumAll(2, 3));
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// use of never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string'; // Type Guard
    if (typeof value === 'number')
        return 'number'; // Type Guard
    return createError('This should never happen');
};
