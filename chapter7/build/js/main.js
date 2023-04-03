"use strict";
// Index Signatures in TypeScript
// interface TransactionObj {
//     readonly [index: string]: number
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
// console.log(todaysTransactions.Pizza)
// console.log(todaysTransactions['Pizza'])
let prop = 'Pizza';
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
//console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]} `);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const lofStudentKey = (student, key) => {
    console.log(`Student ${key} is ${student[key]}`);
};
lofStudentKey(student, 'GPA');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(`${revenue}: ${monthlyIncomes[revenue]}`);
}
