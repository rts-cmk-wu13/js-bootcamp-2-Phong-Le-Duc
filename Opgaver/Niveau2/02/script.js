
const buttonIncrease = document.querySelector("#increase");
const buttonDecrease = document.querySelector("#decrease");
const counter = document.querySelector(".counter");



let count = 0;
counter.textContent = count;


function updateCounter(isIncreasing) {
    if (isIncreasing) {
        count++; 
    } else if (count > 0) {
        count--; 
    }
    counter.textContent = count; 
}


buttonIncrease.addEventListener("click", function () {
    updateCounter(true);  
});

buttonDecrease.addEventListener("click", function () {
    updateCounter(false);  
});