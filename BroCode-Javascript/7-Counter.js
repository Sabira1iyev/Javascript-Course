const increase = document.getElementById("increaseBtn");
const decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");

let counter = 0;

increase.addEventListener("click", () =>{
    counter++;
    document.getElementById("countLabel").textContent = counter;
});

decrease.addEventListener("click", () =>{
    counter--;
    document.getElementById("countLabel").textContent = counter;
})

reset.addEventListener("click", () =>{
    counter = 0;
    document.getElementById("countLabel").textContent = counter;
})