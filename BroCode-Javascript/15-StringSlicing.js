const fullname = "Sabir Aliyev";

// let firstname = fullname.slice(0,6);   girilen stringdeki 0-ci herfden baslayaraq 6-ciya qeder alir, amma sonuncunun ozunu almir
// let lastname = fullname.slice(5,12);
// let firsthchar = fullname.slice(0,1); ilk herfi verir
// let lastchar = fullname.slice(-1); sonuncu herfi verir, azaltdiqca sonraki herfleri de elave edir

// let firstname = fullname.slice(0, fullname.indexOf(" "));
// let lastname = fullname.slice(fullname.indexOf(" ") + 1) indexOf() funksiyasi ona vereceyimiz paramtreye catana qeder stringi yazdirir
// console.log(firstname);
// console.log(lastname);

const email = "s.aliyev2005@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));
console.log(username);
console.log(extension);