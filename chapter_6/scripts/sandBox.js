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
// const paras = document.getElementsByTagName("p");
// console.log(paras);

const para = document.querySelector("p");
para.innerText = "ninjas are awesome!";
console.log(para.innerText);

const paras = document.querySelectorAll("p");
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += " new text";
});

const content = document.querySelector(".content");
// console.log(content.innerHTML);
// content.innerHTML += "<h2>this is a new h2</h2>";
// console.log(content.innerHTML);

const people = ["mario", "luigi", "yoshi"];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});