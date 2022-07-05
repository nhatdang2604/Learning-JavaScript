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
