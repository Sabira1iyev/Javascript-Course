const person1 = {
    name: "spongebob",
    favfood: "hamburgers",
    sayhello: function () {
        console.log(`Hi, i am ${this.name}`)
    },
    eat: function(){console.log(`${this.name} is eating ${this.favfood}`)},
}



person1.sayhello();
person1.eat();