// Selecting DOM elements
const startBtn = document.querySelector("#startBtn"),
    endBtn = document.querySelector("#endBtn"),
    prevNext = document.querySelectorAll(".prevNext"),
    numbers = document.querySelectorAll(".link");

// Setting up initial step
let currentStep = 0;

// Function to update the button states
const updateBtn = () => {
    if (currentStep === 4) {
        endBtn.disabled = true;
        prevNext[1].disabled = true;
    } else if(currentStep === 0) {
        startBtn.disabled = true;
        prevNext[0].disabled = true;
    } else {
        endBtn.disabled = false;
        prevNext[1].disabled = false;
        startBtn.disabled = false;
        prevNext[0].disabled = false;
    }
};

// Add event listener to the number links
numbers.forEach((number,numIndex) => {
    number.addEventListener("click", (e) => {
        e.preventDefault();
        currentStep = numIndex;
        document.querySelector(".active").classList.remove("active");
        number.classList.add("active");
        updateBtn();
    });
});

prevNext.forEach(button => {
    button.addEventListener("click", (e) => {
        currentStep += e.target.id === "next" ? 1 : -1; 
        numbers.forEach((number, numIndex) => {
            number.classList.toggle("active", numIndex === currentStep);
            updateBtn();
        });
    });
});

// Add event listener to the start button
startBtn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    numbers[0].classList.add("active");
    currentStep = 0;
    updateBtn();
    endBtn.disabled = true;
    prevNext[1].disabled = true;
})

// Add event listener to the end button
endBtn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    numbers[4].classList.add("active");
    currentStep = 4;
    updateBtn();
    startBtn.disabled = false;
    prevNext[0].disabled = false;
})

