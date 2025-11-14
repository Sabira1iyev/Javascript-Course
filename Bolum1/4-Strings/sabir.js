console.log("merhaba dunya");


let email = "gerglhi@hotmail.com";
console.log(email);

//birllestirme

let ad = "Sabir";
let soyad = "Aliyev";

let adSoyad = ad +  " " + soyad;
console.log(adSoyad);



//karakter cekme

console.log(adSoyad[0]);
console.log(adSoyad[2]);


// kac karakter


console.log(adSoyad.length);
//if(adSoyad.length > 0){
// }

console.log(adSoyad.toUpperCase());
let kucukAdSoyad = adSoyad.toLocaleLowerCase();
console.log(kucukAdSoyad);
console.log(adSoyad);


let index = adSoyad.indexOf('b');
console.log("B-nin bulundugu index: " +index);