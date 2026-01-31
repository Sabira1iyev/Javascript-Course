const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`guess a number between ${minNum} - ${maxNum}`);
  guess = Number(guess);
  if (isNaN(guess)) {
    window.alert("please enter a valid number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("please enter a valid number");
  }
  else{
    attempts++;
    if(guess < answer){
        window.alert("too low, try again");
    }
    else if(guess > answer){
        windows.alert("too High, try again");
    }
    else{
        window.alert(`correct, the answer was ${answer}. it took you ${attempts}`);
        running = false;
    }
  }
}
