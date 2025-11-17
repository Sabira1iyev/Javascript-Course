class User{
    constructor(name,age,surname,email) {
        this.username = name;
        this.age = age;
        this.surname = surname;
        this.email = email;
    }
    login(){
        console.log(`${this.username} giris yapti`);
        return this;
        // return `${this.username} giris yapti`;
    }
    logout(){
        console.log(`${this.username} cikis yapti`);
        return this;
    }
}

class Admin extends User{
     deleteUser(userArrived){
        users = users.filter((user) => user.username !== userArrived.username);
     }
}

const userOne = new User('Sabir', 20, "ALiyev", "sss@hotmail.com");
const userTwo = new User('Nida', 18, "ALiyeva","nida@hotmail.com");
const userThree = new Admin('Osman', 24, "Yusibov", "osman@hotmail.com");
// console.log(userOne.login(),userTwo.logout()); 
// userOne.login().logout().logout();
// userTwo.login().logout().logout();

let users = [userOne,userTwo,userThree];
userThree.deleteUser(userOne);

console.log(userOne, userTwo, userThree);
console.log(users);