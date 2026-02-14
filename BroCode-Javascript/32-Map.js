
// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square);
// console.log("Squares: " + squares);
// const cubes = numbers.map(cube);
// console.log("Cubes: " + cubes);

// function square(element) {
//     return Math.pow(element, 2);
// }

// function cube(element) {
//     return Math.pow(element, 3);
// }

const students = ["spongebob", "patrick", "squidward", "sandy"];
const dates = ["2026-2-15", "2024-3-17", "2026-7-26"];
const uppers = students.map(upperCase);
const lowers = students.map(lowerCase);
const formatedDates = dates.map(formatDates);

console.log("uppercases: " + uppers);
console.log("lowercases: " + lowers);
console.log("formatedDates: " + formatedDates);



function upperCase(element) {
    return element.toUpperCase();
}

function lowerCase(element) {
    return element.toLowerCase();
}



function formatDates(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}