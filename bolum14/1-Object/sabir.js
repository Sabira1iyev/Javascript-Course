const userOne = {
    username: 'Sabir',
    email: 'sss@hotmail.com',
    login(){
        console.log("sabir giris yapti");
    },
    logOut(){
        console.log('Sabir cikis yapti')
    }
};

console.log(userOne.email, userOne.username);
userOne.login();

const userThree = new User('Nida', 'nida@hotmail.com');