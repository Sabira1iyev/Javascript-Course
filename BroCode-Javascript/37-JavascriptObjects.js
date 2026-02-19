

const person1 = {
    firstName: "Spongebob",
    lastname: "Squarepants",
    age: 30,
    isEmployeed: true,
    sayHello: function () { console.log("Hello Spongebob") },
    eat: function () { console.log("i am eating Krabby Patty") },
}

const person2 = {
    firstName: "Patrick",
    lastname: "Star",
    age: 42,
    isEmployeed: false,
    sayHello: () => console.log("hey, i'm Patrick"),
    eat: () => { console.log("i am eating roast beef, chicken, and pizza") },
}

person1.eat();
person2.eat();


// console.log(person1.firstName);
// console.log(person1.lastname);
// console.log(person1.age);
// console.log(person1.isEmployeed);


// console.log(person2.firstName);
// console.log(person2.lastname);
// console.log(person2.age);
// console.log(person2.isEmployeed);


