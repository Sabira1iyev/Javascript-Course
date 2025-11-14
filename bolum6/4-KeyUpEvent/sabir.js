const form = document.querySelector('.signupForm');
const message = document.querySelector('.message');
const usernamePatter = /^[a-z]{6,10}$/;

form.addEventListener('submit',e=>{
    e.preventDefault();
    const username = form.username.value;
     

    if(usernamePatter.test(username)){
        message.textContent = 'Basarili';
    }
    else{
        message.textContent = 'Lutfen hepsini dogru yazdiginizdan emin olun';
    }
})

form.username.addEventListener('keyup',e=>{
    // console.log(e.target.value);
if(usernamePatter.test(e.target.value)){
  //  console.log('Basarili');
  form.username.setAttribute('class','success')
}
else{
   // console.log('Basarisiz');
   form.username.setAttribute('class','error')

}
})