"use strict";

let loc = 0;
const generator = function* () {
    loc = 1; yield {x: 0, y: 0};
    loc = 2; yield {x: 1, y: 1};
    loc = 3; yield {x: 2, y: 2};
};

//Basic way
// const iter = generator();
// let value = iter.next();
// while (!value.done) {
//     console.log(value);
//     value = iter.next();
//     value = iter;
// }

//For of way
const iter0 = generator();
for (const i of iter0) {
    console.log(i);
}