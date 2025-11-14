const icerik = document.querySelector('p');
console.log(icerik.classList);
icerik.classList.add('can');
icerik.classList.remove('error');

const pDegeri = document.querySelectorAll('p');

pDegeri.forEach(sabir => {
    if (sabir.textContent.includes('error')) {
        sabir.classList.add('error');
    }
    if(sabir.textContent.includes('success')){
        sabir.classList.add('success');
    }
})