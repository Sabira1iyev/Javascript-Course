// const pdeger = document.querySelector("p");
// console.log(pdeger.innerText);

// pdeger.innerText = 'Can boz fullstack developer';

/*
const pdeger = document.querySelectorAll('p');

pdeger.forEach(a =>{
    console.log(a.innerText);
    a.innerText += '  yeni alan';
})
*/


const icerik = document.querySelector(".icerik");
console.log(icerik.innerHTML );

// icerik.innerHTML = '<h2>Vue js, React js, Angular js</h2>';

icerik.innerHTML += '<h2>Vue js, React js, Angular js</h2>';

const ogrenciler = ['can','tugba','elif'];
ogrenciler.forEach(ogrenci =>{
    icerik.innerHTML += `<p>${ogrenci}</p>`
})