class User{
    constructor(name,age,surname,email) {
        this.username = name;
        this.age = age;
        this.surname = surname;
        this.email = email;
    }
    login(){
        return `${this.username} giris yapti`;
    }
    logout(){
        return `${this.username} cikis yapti`;
    }
}

const userOne = new User('Sabir', 20, "ALiyev", "sss@hotmail.com");
const userTwo = new User('Nida', 18, "ALiyeva","nida@hotmail.com");
console.log(userOne.login(),userTwo.logout());