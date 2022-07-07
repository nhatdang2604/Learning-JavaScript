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

const genLines = function*() {
    yield "first line";
    yield "second line";
    yield "last line";
};

const numberLines = function*(lineIterable) {
    let index = 0;
    for (const line of lineIterable) {
        ++index;
        yield index + ": " + line;
    }
};

let iter = numberLines(genLines());
for (const line of iter) {
    console.log(line);
}

const mapIter = function* (iterables, functor) {
    for (const iterable of iterables) {
        yield functor(iterable);
    }
}

const iter1 = mapIter([1,2,3], x => 2*x);
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());
