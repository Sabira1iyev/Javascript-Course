

// class MathUtil {
//     static PI = 3.14159;
//     // static badimcan = "badimcan";
//     // static total = 2 + 3;

//     static getDiameter(radius) {
//         return radius * 2;
//     }
//     static getcircumference(radius){
//         return 2 * this.PI * radius;
//     }

//     static getArea(radius){
//         return this.PI * radius * radius;
//     }
// }

// // console.log(MathUtil.PI);
// // console.log(MathUtil.badimcan);
// // console.log(MathUtil.total);

// console.log(MathUtil.getDiameter(2));
// console.log(MathUtil.getcircumference(4));
// console.log(MathUtil.getArea(5));


class User{
    static userCount = 0;
    
    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getCount(){
        console.log(`There are ${this.userCount} users online`);
    }

    sayHello(){
        console.log(`Hello, my username is: ${this.username}`)
    }
}


const user1 = new User("spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getCount();