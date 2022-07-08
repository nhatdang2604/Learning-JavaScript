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