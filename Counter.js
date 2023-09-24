let count = 0;
let isRunning = false;
let intervalId = null;

const counterDisplay = document.querySelector("#count");
const StartStopButton = document.querySelector("#startstopButton");
const increment = document.querySelector("#incrementButton");
const decrement = document.querySelector("#decrementButton");

 updateCounter=()=>{

    counterDisplay.textContent = count;
}

startCounter=()=>{
    if(!isRunning){

    intervalID = setInterval(()=>{

        count++;
        updateCounter()

    },1000);
    StartStopButton.textContent = 'stop';
    }else{
        if(isRunning){

            clearInterval(intervalID);
            StartStopButton.textContent = 'start';
        }
    }
}

incrementCounter = () =>{
    count++;
    updateCounter();
    clearInterval(intervalID);
    isRunning = false;
    StartStopButton.textContent = 'start';
}

decrementCounter = () => {
    count--;
    updateCounter();
    clearInterval(intervalID);
    isRunning = false;
    StartStopButton.textContent = 'start';
}

StartStopButton.addEventListener('click' , startCounter);
increment.addEventListener('click' , incrementCounter);
decrement.addEventListener('click' , decrementCounter);