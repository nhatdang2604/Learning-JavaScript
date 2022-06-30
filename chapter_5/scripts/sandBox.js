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

    login() {
        console.log("The user logged in");
    },

    logout() {
        console.log("The user logged out");
    },

    logBlogs() {
        //console.log(this.blogs);
        console.log("This user has written the following blogs: ");
        this.blogs.forEach(blog => {
            console.log(blog);
        });

        // const test = () => {
        //     console.log(this);
        // }

        // test();
    }, 
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user);

console.log(user[`name`]);
user[`name`] = "chun-li";
console.log(user);

console.log(typeof(user));

//console.log(this);

user.login();
user.logout();
user.logBlogs();
