/* 
const dersler=[
   {isim:'matematik',puan:90},
   {isim:'fizik',puan:70},
   {isim:'kimya',puan:85},
]
*/


let ogrenci =  {
   ad:'Can',
   yas:29,
   email:'cnbozhotmail.com',
   sinif:12,
   dersler: [
            {isim:'matematik',puan:90},
            {isim:'fizik',puan:70},
            {isim:'kimya',puan:85},],
   login()
   {
      console.log('ogrenci giris yapti');
   },
   logout()
   {
      console.log('ogrenci cikis yapti');
   },
   printLessons()
   {
      console.log(this.dersler);
    //  console.log(this);
    this.dersler.forEach(a =>{
      console.log(a.isim,a.puan);
    })
   }  
};
// console.log(this);
ogrenci.printLessons();
// ogrenci.login(); 
// ogrenci.logout();
 





























































































/*
let student = {
   name:'sabir',
   surname: 'aliyev',
   age:19,
   univerrsity:'TSU',
   faculty:'Computer science',
   lessons:['calculus','algebra','phisic','ICT','c++','english B1.1'],
   function1(){
      console.log("sabir aliyev is studying at the tbilisi state university");
   },
   function2(){
      console.log("he studying in compyuter science");
   },
};

student.age;
student.name;
student.surname;
student.univerrsity;
student.faculty;
student.lessons;

student.function1();
student.function2();
*/
