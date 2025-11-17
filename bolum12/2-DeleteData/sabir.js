localStorage.setItem('name', 'Sabir');
localStorage.setItem('age', 20);

let ad = localStorage.getItem('name');
let yas = localStorage.getItem('age');

console.log(ad,yas);

// localStorage.removeItem('name');
localStorage.clear();
ad = localStorage.getItem('name');
yas = localStorage.getItem('age');
console.log(ad,yas);

