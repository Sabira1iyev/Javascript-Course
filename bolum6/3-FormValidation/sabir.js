const form = document.querySelector('.signupForm');
const message = document.querySelector('.message');

form.addEventListener('submit',e=>{
    e.preventDefault();
    const username = form.username.value;
    const usernamePatter = /^[a-z]{6,10}$/;

    if(usernamePatter.test(username)){
        message.textContent = 'Basarili';
    }
    else{
        message.textContent = 'Lutfen hepsini dogru yazdiginizdan emin olun';
    }
})