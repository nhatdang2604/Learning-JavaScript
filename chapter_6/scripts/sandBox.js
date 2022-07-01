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

const link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://facebook.com");
link.innerText = "Facebook";

const msg = document.querySelector("p.error");
console.log(msg.getAttribute("class"));
msg.setAttribute("class", "success");
msg.setAttribute("style", "color: green;");

//title.setAttribute("style", "margin: 50px");
console.log(title.style);
console.log(title.style.color);

title.style.margin = "50px";
title.style.color = "crimson";
title.style.fontSize = "60px";
title.style.margin = "";

const p = document.getElementById("msg");
console.log(p.classList);
p.classList.add("error");
console.log(p.classList);
p.classList.add("success");
console.log(p.classList);


const ps = document.querySelectorAll("body > p");

console.log(ps.length);
ps.forEach(p => {
    let text = p.innerText;
    const ERROR = "error";
    const SUCCESS = "success";

    if (text.includes(ERROR)) {
        p.classList.add(ERROR);
    } else if (text.includes(SUCCESS)) {
        p.classList.add(SUCCESS);
    }
});