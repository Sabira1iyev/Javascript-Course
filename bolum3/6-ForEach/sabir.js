/* const a = (callBacka) =>{
    let yas = 40;
    callBacka(yas);
};
a(function(value)
{
    console.log(value);
})
    
------

let ogrencilerim = ['can','hakan','elif','tugba'];

ogrencilerim.forEach(function()
{
    console.log("selam");
})

ogrencilerim.forEach(function(kisi,index)
{
    console.log(kisi,index);
})


const ogrenci = (kisi,index)=>
{
    console.log(`${index} - ${kisi}`);
}

ogrencilerim.forEach(ogrenci);

----------

let isimler = ['enes','yakup','bilal','kubra','aysenur','adem'];

isimler.forEach(function(isim) {

    console.log(isim);
});

*/


let numbers = [1,2,3,4,5,6,7,8,9,];

numbers.forEach(function(number,index){
    console.log(number,index);
});
