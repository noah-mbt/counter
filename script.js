const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
const increaseBtn = document.querySelector("#increase");
const display = document.querySelector("#display");


decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
increaseBtn.addEventListener("click", increase);

function decrease () {
    display.textContent -= 1;
};

function reset () {
    display.textContent = 0;
};

function increase () {
    let displayInt = parseInt(display.textContent);
    display.textContent = displayInt + 1;
};


