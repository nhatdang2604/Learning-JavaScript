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