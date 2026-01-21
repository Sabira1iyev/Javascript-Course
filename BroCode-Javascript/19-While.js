// while loop - repeat some code WHILE some condition is true

// let username = "";

// while(username === "" || username === null){
//    username = window.prompt(`enter your name:`);
// }

// console.log(`hello ${username}`);


let loggedin = false;
let username;
let password;

while(!loggedin){
    username = window.prompt(`enter your username:`);
    password = window.prompt(`enter your password:`);

    if(username === "myusername" && password === "mypassword"){
        loggedin = true;
        console.log(`you are now logged in!`);
    }
    else{
        console.log("try again!");
    }
}