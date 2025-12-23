
// let age = 20;  

// if(age >= 18){
//     console.log("you are enough to enter site");
// }

// else{
//     console.log("you must be 18 to enter this site");
// }

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){
    age  = myText.value;
    age = Number(age);

    if(age >= 100){
        console.log("")
        resultElement.textContent = "you are too old to enter this site";
    }
    else if(age == 0){
        resultElement.textContent = "you can't enter, You were just born";
    }
    else if(age >= 18){
        resultElement.textContent = "you are old enough to enter this site";        
    }
    else if(age < 0){
        resultElement.textContent = "your age can't be below 0";
    }
    else{
resultElement.textContent = "You must be 18+ to enter this site";
    }
}




