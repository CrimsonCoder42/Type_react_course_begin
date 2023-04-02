// Index Signatures in TypeScript

// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number
// }

interface TransactionObj {
    [index: string]: number
}

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

console.log(todaysNet(todaysTransactions))
