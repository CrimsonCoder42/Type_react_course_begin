let stringArr = ['one', 'hey', 'Dave'];

let guitars = ['Start', 'les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('Doe')

guitars[0] = 1984
guitars.unshift('Jim')

guitars = stringArr // Works only if the types are the same.

let test = []