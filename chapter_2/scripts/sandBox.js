let age = 25;
let year = 2022;


//log things to console
console.log(age, year);

age = 30;
console.log(age, year);

const point = 100;
console.log(point);

var score = 75;
console.log(score);

//strings
console.log("Hello World");

let email = "test@gmail.com";
console.log(email);

//String concatenation
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName);

//Getting characters
console.log(fullName[0]);

//String length
console.log(fullName.length);

//String methods
console.log(fullName.toUpperCase());
console.log(fullName);

let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf("@");
console.log(index);

result = email.lastIndexOf("t");
console.log(result);

result = email.slice(0, email.lastIndexOf("@"));
console.log(result);

result = email.substr(email.lastIndexOf("@") + 1, 9);
console.log(result);

result = email.replace("@", "__");
console.log(result);
console.log(email);