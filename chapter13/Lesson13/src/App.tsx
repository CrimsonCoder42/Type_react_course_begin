import { useState, useEffect, useCallback, useMemo, useRef, MouseEvent, KeyboardEvent } from 'react'

interface User {
    id: number,
    username: string,
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n: number) => {
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)
}

const myNum: number = 37

function App() {
    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState<User[] | null>(null)

    const inputRef = useRef<HTMLInputElement>(null)

    console.log(inputRef?.current)
    console.log(inputRef?.current?.value)

    useEffect(() => {
        console.log('mounting')
        console.log('Users:', users)

        return () => console.log('unmounting')
    }, [users])


    const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> |
        KeyboardEvent<HTMLButtonElement>) => setCount(prev => prev + 2), [])


    const result = useMemo(() => fib(myNum), [myNum])


  return (
    <div className="App">
        <h1>Count: {count}</h1>
        <button onClick={addTwo}>Add</button>
        <h1>Result: {result}</h1>
        inputRef: <input ref={inputRef} type="text" />
    </div>
  )
}

export default App
