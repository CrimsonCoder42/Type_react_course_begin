// Index Signatures in TypeScript

interface TransactionObj {
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number
}

// interface TransactionObj {
//     readonly [index: string]: number
// }

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

// console.log(todaysTransactions.Pizza)
// console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

////////////////////////////////////////////////////////////////////////

interface Student {
    [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}


const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}


//console.log(student.test)


for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]} `)
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

const lofStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key} is ${student[key]}`)
}

lofStudentKey(student, 'GPA')



////////////////////////////////////////////



// interface Incomes {
//     [key: string]: number
// }

type Streams = `salary` | 'bonus' | 'sidehustle'


type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(`${revenue}: ${monthlyIncomes[revenue as keyof Incomes]}`)
}











