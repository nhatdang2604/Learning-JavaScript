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

//if statements
const age = 25;
if (age > 20) {
    console.log(`you are over 20 years old`);
}

const ninjas = ["shaun", "ryu", "chun-li", "yoshi"];
if (ninjas.length > 3) {
    console.log("that's a lot of ninjas");
}

const password = "p@ssword123456";

if (password.length >= 8) {
    console.log("that password is long enough! ");
}

//if else statements

if (password.length >= 12) {
    console.log("that password is might strong");
} else if (password.length >= 8) {
    console.log("that password is long enough! ");
} else {
    console.log("password is not long enough");
}

