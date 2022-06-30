//for loops

for (let i = 0; i < 5; ++i) {
    console.log("in loop: ", i);
}

console.log("loop finished");

const names = [
    "shaun",
    "mario",
    "luigi",
]

for (let i = 0; i < names.length; ++i) {
    //console.log((i + 1) + ") " + names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

//while loops
let i = 0;
while (i < 5) {
    console.log("in loop: " + i);
    ++i;
}

i = 0;
while (i < names.length) {
    console.log(names[i]);
    ++i;
}

//do while loops
i = 3;
do {
    console.log("val of i is: ", i);
    ++i;
} while(i < 5);