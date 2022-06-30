//object literals

// const blogs = [
//     {title: "why mac & cheese rules", likes: 30},
//     {title: "10 things to make with marmite", likes: 50},
// ]

// console.log(blogs);

let user = {
    name: "crystal",
    age: 30,
    email: "test@gmail.com",
    location: "berlin",
    blogs: [
        {title: "why mac & cheese rules", likes: 30},
        {title: "10 things to make with marmite", likes: 50},
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
            console.log(blog.title, blog.likes);
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
