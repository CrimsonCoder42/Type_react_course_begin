"use strict";
class Coder {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Devin = new Coder('Devin', 'Rock', 42);
// console.log(Devin.getAge())
// console.log(Devin.age)
// console.log(Devin.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Izzy = new WebDev('Mac', 'Izzy', 'Rock', 40);
console.log(Izzy.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy Page', 'Guitar');
console.log(Page.play('playing'));
// --------------------------------------------------------------
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
// console.log(John.id)
// console.log(Amy.id)
// console.log(Steve.id)
// console.log(Peeps.count)
// --------------------------------------------------------------
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(v => typeof v === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Led Zeppelin', 'The Who', 'The Beatles'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'The Rolling Stones'];
console.log(MyBands.data);
