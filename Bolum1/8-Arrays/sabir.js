
let isimler = ['sabir', 'ridvan','elif'];
//console.log(isimler[1]);


// isimler[1] = 'tugce';

//console.log(isimler[1]);

let yaslar = [3,18,25,50];

//console.log(yaslar[3]);

let rastgele = ['sabir','aliyev', 10,15];
//console.log(rastgele);

//console.log(rastgele.length);

let tireli = isimler.join('-');
console.log(tireli);

let virgullu = isimler.join(',');
console.log(virgullu);


let sira = isimler.indexOf('elif');
console.log(sira);


let kacinsira = isimler.indexOf('ridvan');
console.log(kacinsira);

let sirakac = isimler.indexOf('sabir');
console.log(sirakac);

let ekle = isimler.concat(['merve', 'suna']);
console.log(ekle);
 

//let elemanekle = isimler.push('leyla');
//console.log(isimler);

isimler.pop();
console.log(isimler);
 
 