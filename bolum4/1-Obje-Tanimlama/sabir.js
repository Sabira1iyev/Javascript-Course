let ogrenci =  {
   ad:'Can',
   yas:29,
   email:'cnbozhotmail.com',
   sinif:12,
   dersler:['matematik','fizik','kimya']
};

console.log(ogrenci);

console.log(ogrenci.ad);

ogrenci.ad = 'sabir';

console.log(ogrenci.ad);

console.log(ogrenci['yas']);


ogrenci['yas'] = 19;
console.log(ogrenci['yas']);

console.log(typeof ogrenci);