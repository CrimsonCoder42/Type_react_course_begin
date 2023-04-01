"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Start', 'les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('Doe');
guitars[0] = 1984;
guitars.unshift('Jim');
guitars = stringArr; // Works only if the types are the same.
let test = [];
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['Devin', 40, true];
let mixed = ['John', 1984];
// objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
exampleObj.prop1 = 'John';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812', 'For Unlawful Carnal Knowledge']
};
let JP = {
    name: 'Jimmy',
    active: false,
    albums: ['I', 'II', 'IV']
};
const greetGuitartist = (guitarists) => {
    if (guitarists.name) {
        return `Hello ${guitarists.name.toUpperCase()}!`;
    }
    return `Hello!`;
};
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
