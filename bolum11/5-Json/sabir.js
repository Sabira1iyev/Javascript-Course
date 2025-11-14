const getTodos = (callback) =>{
const request = new XMLHttpRequest();
request.addEventListener('readystatechange',()=>{
 //   console.log(request,request.readyState);
    if(request.readyState === 4 && request.status === 200){
      const data = JSON.parse(request.responseText);
     //  console.log(request.responseText);
     callback(undefined,data);
    }
    else if(request.readyState === 4){
   //     console.log("Basarili cevap alamadik");
   callback('Basarili cevap alamadik',undefined);
    }
})
request.open('GET','https://jsonplaceholder.typicode.com/todos');
request.send(); 
};

console.log(1);
console.log(2);


 

getTodos((err,data)=>{
  //  console.log(err,data);
  if(err){
    console.log(err);
  }
  else{
    console.log(data);
  }
});
 

console.log(3);
console.log(4);