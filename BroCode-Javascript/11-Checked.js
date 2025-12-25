const myCheckBox = document.getElementById("myCheckbox")
const visaBtn = document.getElementById("visaBtn")
const masterCardBtn = document.getElementById("masterCardBtn")
const paypal = document.getElementById("paypal")
const mysubmit = document.getElementById("mysubmit")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")


mysubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `you are subscribed`;
    }
    else{
        subResult.textContent = `you are not subscribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `you are paying with visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `you are paying with mastercard`;
    }
    else if(paypal.checked){
        paymentResult.textContent = `you are paying with paypal`;
    }
    else{
        paymentResult.textContent =    `you must select payment method`;
    }
}