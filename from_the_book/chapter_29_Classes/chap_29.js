"use strict";

class Person {
    #_firstName;
    constructor(firstName) {
        this.#_firstName = firstName;
    };
    
    describe() {
        return `Person names #${this.#_firstName}}`;
    }

    firstName() {return this.#_firstName;}

    static extractNames(people) {
        return people.map(person => person.#_firstName);
    }
}

const Tuấn = new Person("Tuấn");
console.log(Tuấn.firstName());
const studentSize = 5;
let people = [];
for (let i = 0; i < studentSize; ++i) {
    people.push(new Person("Test" + i));
};

let names = Person.extractNames(people);
for (name of names) {
    console.log(name);
}

//Add attribute in constructor
class Container {
    constructor(value) {
        this.value = value;
    }
}

const cont = new Container(12);
console.log(cont.value);