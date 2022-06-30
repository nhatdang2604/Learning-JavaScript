//object literals

let user = {
    name: "crystal",
    age: 30,
    email: "test@gmail.com",
    location: "berlin",
    blogs: [
        "why mac & cheese rules",
        "10 things to make with marmite",
    ],

    login: () => {
        console.log("The user logged in");
    },

    logout: () => {
        console.log("The user logged out");
    },

    // logBlogs: () => {
        
    // }, 
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user);

console.log(user[`name`]);
user[`name`] = "chun-li";
console.log(user);

console.log(typeof(user));

user.login();
user.logout();
