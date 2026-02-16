

// const hello = function(){
//     console.log("hello");
// }


// const hello = (name, age) => {
//     console.log(`Hello ${name}`)
//     console.log(`You are ${age} years old`)
// };

// hello("Sabir", 20);



// setTimeout(hello, 3000);

// function hello() {
//     console.log("hello")
// }


// setTimeout(function hello() {
//     console.log("hello")
// }, 3000);


// setTimeout(() => console.log("hello"), 3000);


const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);

const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(cubes);

const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(evenNums);

const oddNums = numbers.filter((element) => element % 2 !== 0);
console.log(oddNums);


const total = numbers.reduce((acumulator, element) => acumulator + element);
console.log(total);