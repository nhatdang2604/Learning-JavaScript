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


