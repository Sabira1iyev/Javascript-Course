let username = window.prompt("enter your username: ");

// username = username.trim(); // degiskenin basindaki sonundaki bosluklari siler
// let letter = username.charAt(0); // username stringinin ilk karakterini 
// letter = letter.toUpperCase(); // string boyukle yazir
// let extrachars =  username.slice(1); // stringin 1. indexinden baslayip sona kadar olan kismini alir
// extrachars = extrachars.toLowerCase();  // stringi kucuk harfle yazar
// username = letter + extrachars;

// console.log(username);

username = username.trim().charAt(0).toUpperCase() + username.slice.trim().slice(1).toLowerCase();
console.log(username);