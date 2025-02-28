
const guess = Math.round(Math.random()*100);
let prevGuess = [];

const form = document.querySelector("form")
let numberOfGuess = 10;
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    
    
    const ip = (document.querySelector("input").value)
    const result = document.querySelector("#result");
    if(numberOfGuess == 0)
    {
        prevGuess.slice(0,10);
        numberOfGuess = 10;
        result.innerHTML = `You Losts Retry`
    }
    prevGuess.push(ip);
    const prev = document.querySelector("#prevGuess")
    const numofguess = (document.querySelector("#numofguess").innerText = numberOfGuess);
    if(ip == guess)
    {
        result.innerHTML = `You Won ${guess}`
    }
    else{
        numberOfGuess-=1;
        numofguess.innerHTML = numberOfGuess;
        prev.innerHTML = prevGuess[prevGuess.length-2];
    }
})


