
class Coder {

    secondLang!: string

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'TypeScript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }

}


const Devin = new Coder('Devin', 'Rock', 42)

// console.log(Devin.getAge())
// console.log(Devin.age)
// console.log(Devin.lang)

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age);
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}



const Izzy = new WebDev('Mac', 'Izzy', 'Rock', 40)

console.log(Izzy.getLang())
// console.log(Izzy.age)

// --------------------------------------------------------------


interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} is ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy Page', 'Guitar')

console.log(Page.play('playing'))

// --------------------------------------------------------------

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

// console.log(John.id)
// console.log(Amy.id)
// console.log(Steve.id)
// console.log(Peeps.count)


// --------------------------------------------------------------

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(v => typeof v === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }

}

const MyBands = new Bands()
MyBands.data = ['Led Zeppelin', 'The Who', 'The Beatles']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'The Rolling Stones']
console.log(MyBands.data)



