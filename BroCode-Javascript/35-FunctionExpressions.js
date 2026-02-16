
// function hello(){
//         console.log("hellor");
// }

// const hello = function(){
//     console.log("hello");
// }


// hello();


// setTimeout(function(){
//     console.log("hello");
// }, 3000);


const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(function(element) {
    return Math.pow(element, 2);
});

console.log(squares)


const cubes = numbers.map(function(element) {
    return Math.pow(element, 3);
});

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});

const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});

const total = numbers.reduce(function(previous, element){
    return previous + element
});



console.log(cubes); 
console.log(evenNums);
console.log(oddNums);
console.log(total);
