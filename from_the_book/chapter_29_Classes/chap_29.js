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

//Try to access private attribute of superclass from subclass
// class SuperClass {
//     #_superProp = "superProp";
// }

// class SubClass extends SuperClass {
//     superProp() {return this.#_superProp;}
// }

//Using class before ECMASScript 6
// function StringBuilderConstructor(starterString) {
//     this.string = starterString;
// }

const StringBuilderConstructor = function(starter) {
    this.string = starter;
}

StringBuilderConstructor.prototype.add = function(string) {
    this.string += string;
    return this;
};

const builder = new StringBuilderConstructor("");
builder.add("Hello").add(" ").add("World");
console.log(builder.string);