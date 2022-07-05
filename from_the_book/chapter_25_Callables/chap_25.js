"use strict";

//Ordinary functions

//Function declaration
function foo0(a, b) {
    //do something
}

//Function expression
const foo1 = function(a, b) {
    //do something
}

//Named function expression
const foo3 = function foo_3(a, b) {
    //do something
}

//call
const students = [
    {name: `test0`},
    {name: `test1`},
    {name: `test2`},
]

for (const student of students) {
    (function(){
        console.log(this.name);
    }).call(student);
} 

//apply
const applier = function(...students) {
    console.log(this.name);
    for (const student of students) {
        console.log(student);
    }
};

const applierOwner = {name: "applier tester"};
applier.apply(applierOwner, students);

//bind
const adder = function(a, b) {
    console.log(this.name);
    return a + b;
}

const binderOwner = {name: "binder testing"}
const binder = adder.bind(binderOwner);
console.log(binder(1,2));

//Arrow function cannot apply binder `this` keyword
const arrowAdder = (a, b) => {
    console.log(this.name);
    return a + b;
}
const arrowBinder = arrowAdder.bind(binderOwner);
console.log(arrowBinder(3,2));

