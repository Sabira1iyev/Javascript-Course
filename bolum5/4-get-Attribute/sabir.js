 const link = document.querySelector('a');
 console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.canboz.com/');

link.textContent = 'Boz Training';


const pdegeri = document.querySelector('p');
console.log(pdegeri.getAttribute('class'));

pdegeri.setAttribute('class','error');

pdegeri.setAttribute('style','color:blue');