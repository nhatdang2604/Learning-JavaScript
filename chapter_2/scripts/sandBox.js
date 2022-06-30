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

//Number stuffs
let radius = 10;
const pi = 3.14;
console.log(radius, pi);

console.log(10/2);
result = radius % 3;
console.log(result);

result = pi * radius ** 2;
console.log(result);

let likes = 10;
likes = likes + 1;
++likes;
likes--;
likes *= 2;
likes += 10;
likes -= 5;
likes /= 2;
console.log(likes);
//console.log(5/"hello");
likes = 10;

result = "the blog has " + likes + " likes";
console.log(result);

//Concatenation way
const title = "Best reads of 2022";
const author = "Mario";
result = "The blog called " + title + " by " + author + " has " + likes + " likes ";
console.log(result);

//Template string way
result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

//Creating HTML template
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;

console.log(html);

//Object stuffs
let ninjas = ["shaun", "ryu", "chun-li"];
console.log(ninjas);
ninjas[0] = "terror";
console.log(ninjas[0]);

let ages = [20, 25, 30 , 35];
console.log(ages[2]);

let randoms = ["shaun", "crystal", [30, 20]];
console.log(randoms[2]);

console.log(ninjas.length);

//Array methods
result = ninjas.join(", ");
console.log(result);

result = ninjas.indexOf(`chun-li`);
console.log(result);

result = ninjas.concat(["ken", "akuma"]);
console.log(result);

result = ninjas.push("gon");
console.log(result);
console.log(ninjas);

result = ninjas.pop();
console.log(result);
console.log(ninjas);

//Undefined and null stuffs
//let test;
let test = null;
console.log(test, test * 3, `the age is ${test}`);

//Boolean stuffs
console.log(true, false, "true", "false");

//Methods which returning boolean
email = "gooloogoooloo@gmail.com";
let names = ["mario", "luigi", "toad"];
result = email.includes("@");
console.log(result);

result = names.includes("bowser");
console.log(result);

//Comparision operator
age = 25;
console.log(25 == age);
console.log(30 == age);
console.log(30 != age);
console.log(25 != age);
console.log(25 < age);
console.log(30 > age);
console.log(25 <= age);
console.log(25 >= age);

let name = "shaun";
console.log("shaun" == name);
console.log("Shaun".toLowerCase() != name);
console.log(name > "crystal");
console.log(name > "Shaun");
console.log(name > "Crystal");

//Strict comparision (different types cannot be equal)
console.log(25 == age);
console.log("25" == age);
console.log(25 != age);
console.log("25" != age);
console.log("25" === age);
console.log("25" !== age);

//type conversion
score = "100";
console.log(score + 1);
console.log(1 + score);
console.log(typeof score);

score = Number(score);
console.log(score + 1);
console.log(1 + score);
console.log(typeof(score));

result = Number("hello");
console.log(result, typeof(result));

result = String(50);
console.log(result, typeof(result));
result = Boolean(100);
console.log(result, typeof(result));
result = Boolean(0);
console.log(result, typeof(result));
result = Boolean("0");
console.log(result, typeof(result));
result = Boolean("");
console.log(result, typeof(result));

