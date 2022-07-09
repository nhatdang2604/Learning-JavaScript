"use strict";

//Testing for Executing async functions: synchronous start, asynchronous settlement
const asyncFunction = async function() {
    for (let i = 0; i < 10 ; ++i) {
        console.log(i);
    }
    return "abc";
};

asyncFunction()
    .then((result) => {
        console.log(`Resolve: ${result}`);
    })

console.log("Task end");

//Using await
const textFunction = function() {
    console.log("Hello");
    return "Hello World";
}

const asyncFunction0 = async function() {
    console.log("before await");
    let result = await textFunction();
    console.log("after await");
    console.log("Result 1st turn ", result);
    return result;
}

console.log(asyncFunction0());

