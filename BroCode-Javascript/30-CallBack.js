


// hello(wait);



// function hello(callback) {
//     console.log("hello");
//     callback();
// }

// function wait() {
//     console.log("wait");
// }

// function leave() {
//     console.log("leave!");
// }


// function goodbye() {
//     console.log("goodbye");
// }


// sum(displayPage, 3, 4);

// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result) {
//     console.log(result);
// }

// function displayPage(result) {
//     document.getElementById("myH1").textContent = result;
// }

// function sayhello(name) {
//     console.log("merhaba " + name);
// }

// function greetUser(callback) {
//     const username = "Ali";
//     callback(username);
// }

// greetUser(sayhello);



// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function calculate(a, b, callback) {
//     console.log("sonuc: " + callback(a, b));
// }

// calculate(2, 5, add);
// calculate(4, 6, multiply);

// function doSometthing(callback) {
//     console.log("islem basliyor");
//     setTimeout(() => {
//         console.log("islem tamamlandi!");
//         callback();
//     }, 2000);
// }


// doSometthing(() => {
//     console.log("Callback calisti!");
// });

// const users = [
//     { name: "sabir", age: 20 },
//     { name: "muxtar", age: 19 },
//     { name: "resad", age: 21 }
// ]



// function filterUsers(users, callback) {
//     const result = [];
//     for (let i = 0; i < users.length; i++) {
//         if (callback(users[i])) {
//             result.push(users[i]);
//         }
//     }
//     return result;
// }

// const adults = filterUsers(users, user => user.age >= 18);
// console.log(adults);

