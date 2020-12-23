// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let t = 0;
let stopButton = document.getElementById("stop-button");

// How can you make it stop counting?
let stopCountUp = function() {
    clearTimeout(countUp);
};

let countUp = function() {
    setTimeout(function (){
        seconds.innerHTML = t.toString();
        t++;
        countUp();
        }, 1000);
    stopButton.addEventListener("click", stopCountUp);
};

countUp();
