"use strict";

const names = ["mario", "luigi", "yoshi"];
for (name in names) {
    console.log(name);
}

//Closure using
const incrementorFactory = function(startValue) {
    return (step) => {
        startValue += step;
        return startValue;
    }
};

const incFrom2 = incrementorFactory(2);
console.log(incFrom2(5));