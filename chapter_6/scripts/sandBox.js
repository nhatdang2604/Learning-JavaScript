//Using .querySelector()
const paragraph = document.querySelector("body > h1");
console.log(paragraph);

//Using .querySelectorAll()
const paragraphs = document.querySelectorAll("div");
paragraphs.forEach(para => {
    console.log(para);
})

// const errors = document.querySelectorAll(".error");
// errors.forEach(error => {
//     console.log(error);
// })

//Get an element by id
const title = document.getElementById("page-title");
console.log(title);

//Get elements by class name
const errors = document.getElementsByClassName("error");
console.log(errors);

//Get elements by tag name
const paras = document.getElementsByTagName("p");
console.log(paras);