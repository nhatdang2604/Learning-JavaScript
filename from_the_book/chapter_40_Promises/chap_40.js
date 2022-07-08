"use strict";

const addAsync = function(x, y) {
    return Promise.resolve()
        .then(() => {
            return x + y;
        })
};

let result = 
    addAsync(1,2)
    .then((result) => {
        return result + 3;
    });

console.log(result);

function timesTwoAsync(x) {
    return new Promise(resolve => resolve(2*x));
}

const arr = [1, 2, 3];
const promises = arr.map(timesTwoAsync);
Promise.all(promises)
    .then(result => {
        console.log(result);
    });

const resultTime = 200;
const errorTime = 100;
const promises0 = [
    new Promise((resolve, reject) => setTimeout(() => resolve("result"), resultTime)),
    new Promise((resolve, reject) => setTimeout(() => reject("error"), errorTime)),
];

Promise.race(promises0)
    .then(
        (result) => console.log(result),
        (error) => console.log(error)
    );