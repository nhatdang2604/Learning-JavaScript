"use strict";

class Person {
    #_firstName;
    constructor(firstName) {
        this.#_firstName = firstName;
    };
    
    describe() {
        return `Person names #${this.#_firstName}}`;
    }

    static extractNames(people) {
        return people.map(person => person.#firstName);
    }
}

