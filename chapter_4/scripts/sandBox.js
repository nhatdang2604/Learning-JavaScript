//function declaration
function greet() {
    console.log("hello there");
}

//function expression
const speak = function() {
    console.log("good day");
};

// greet();
speak();

//arguments and parameters

const speak0 = function(name = "luigi", time = "night") {
    console.log(`good ${time} ${name}`);
}

speak0('mario', 'morning');
speak0();

//returning values
const calcArea = function(radius) {
    const pi = 3.14;
    let area = pi * radius ** 2;
    return area;
};

const area = calcArea(5);
console.log(area);

//arrow function
const calcAreaArrow = (radius) => {
    const pi = 3.14;
    let area = pi * radius ** 2;
    return area;
}

const areaArrow = calcAreaArrow(5);
console.log(areaArrow);

//practise arrow functions
const greetArrow = () => "hello, world";
console.log(greetArrow());

const bill = (products, tax) => {
    let total = 0;
    let size = products.length;
    for (let i = 0; i < size; ++i) {
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([15, 15, 30], 0.2));

//functions
const name = "shaun";

const greet0 = () => "hello";
let result0 = greet0();
console.log(result0);

//methods;
 
let result1 = name.toUpperCase();
console.log(result1);
