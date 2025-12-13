

// let username;

// username = window.prompt("what your username? ");


// console.log(username);

let username;
document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    console.log(username);
}