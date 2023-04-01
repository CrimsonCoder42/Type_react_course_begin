"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // les specific
let c = a; // more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(1, 2, 'concat');
// Be careful!! TS doesn't error - but a string is returned
let nextVal = addOrConcat(1, 2, 'concat');
// 10 as string
// (10 as unknown) as string
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
