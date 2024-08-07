// element
// input elements
const billInput = document.getElementById("bill");
const numberOfPeopleInput = document.getElementById("people-number");

const fivePercent = document.querySelector(".five");
const tenPercent = document.querySelector(".ten");
const fifteenPercent = document.querySelector(".fifteen");
const twentyFivePercent = document.querySelector(".twenty-five");
const fiftyPercent = document.querySelector(".fifty");
const customPercent = document.querySelector(".custom-input");

// output elements
const totalTipAmount = document.querySelector(".tip-amount-per-head");
const perPersonTotal = document.querySelector(".total-tip");

// error element
const errorMessage = document.querySelector(".error");

billInput.addEventListener("focus", () => {
    billInput.classList.remove("error-input");
});

numberOfPeopleInput.addEventListener("focus", () => {
    numberOfPeopleInput.classList.remove("error-input");
    errorMessage.style.visibility = "hidden";
});

customPercent.addEventListener("focus", () => {
    fivePercent.classList.remove("active");
    tenPercent.classList.remove("active");
    fifteenPercent.classList.remove("active");
    twentyFivePercent.classList.remove("active");
    fiftyPercent.classList.remove("active");
})

// button element
const resetBtn = document.querySelector(".reset-button");
const resultBtn = document.querySelector(".result-button");


let tipPercent;

// addEventListenr
fivePercent.addEventListener("click", (e) => {
    tipPercent = 5;
    fivePercent.classList.add("active");
    tenPercent.classList.remove("active");
    fifteenPercent.classList.remove("active");
    twentyFivePercent.classList.remove("active");
    fiftyPercent.classList.remove("active");
    customPercent.value = null;
    console.log(tipPercent);
});

tenPercent.addEventListener("click", () => {
    tipPercent = 10;
    // customPercentValue = null;
    fivePercent.classList.remove("active");
    tenPercent.classList.add("active");
    fifteenPercent.classList.remove("active");
    twentyFivePercent.classList.remove("active");
    fiftyPercent.classList.remove("active");
    customPercent.value = null;
    console.log(tipPercent);
});

fifteenPercent.addEventListener("click", () => {
    tipPercent = 15;
    // customPercentValue = null;
    fivePercent.classList.remove("active");
    tenPercent.classList.remove("active");
    fifteenPercent.classList.add("active");
    twentyFivePercent.classList.remove("active");
    fiftyPercent.classList.remove("active");
    customPercent.value = null;
    console.log(tipPercent);
})

twentyFivePercent.addEventListener("click", () => {
    tipPercent = 25;
    // customPercentValue = null;
    fivePercent.classList.remove("active");
    tenPercent.classList.remove("active");
    fifteenPercent.classList.remove("active");
    twentyFivePercent.classList.add("active");
    fiftyPercent.classList.remove("active");
    customPercent.value = null;
    console.log(tipPercent);
})

fiftyPercent.addEventListener("click", () => {
    tipPercent = 50;
    // customPercentValue = null;
    fivePercent.classList.remove("active");
    tenPercent.classList.remove("active");
    fifteenPercent.classList.remove("active");
    twentyFivePercent.classList.remove("active");
    fiftyPercent.classList.add("active");
    customPercent.value = null;
    console.log(tipPercent);
})

let billInputValue,
numberOfPeopleInputValue,
customPercentValue;

resultBtn.addEventListener("click", (e) => {
    console.log("button clicked");
    e.preventDefault();
   
    // const billInputValue = billInput.value ;
    billInputValue = Number(billInput.value);
    // const numberOfPeopleInputValue = numberOfPeopleInput.value;
    numberOfPeopleInputValue = Number(numberOfPeopleInput.value);
    customPercentValue = Number(customPercent.value);
    // validation logic
    if(!billInputValue || billInputValue < 0) {
        billInput.classList.add("error-input");
        // return; 
    }

    if(!numberOfPeopleInputValue || numberOfPeopleInputValue < 0) {
        errorMessage.style.visibility = "visible";
        numberOfPeopleInput.classList.add("error-input");
        return;
    }

    if(customPercentValue) {
        tipPercent = customPercentValue;
        fivePercent.classList.remove("active");
        tenPercent.classList.remove("active");
        fifteenPercent.classList.remove("active");
        twentyFivePercent.classList.remove("active");
        fiftyPercent.classList.remove("active");
    }

    console.log(billInputValue, numberOfPeopleInputValue, customPercentValue, tipPercent);


    // total = amount * percent /100
    const tip = Math.floor((billInputValue * tipPercent) / 100);

    const totalTip = Math.floor(tip / numberOfPeopleInputValue);

    console.log("Tip amount " + tip + ", " + "total tip " + totalTip);

    console.log(totalTipAmount, perPersonTotal);
    totalTipAmount.textContent = tip;
    perPersonTotal.textContent = totalTip;

    // hide button
    resultBtn.style.display = "none";
    resetBtn.style.display = "block";
})

resetBtn.addEventListener("click", () => {

    tipPercent = null;

    billInput.value = null;
    numberOfPeopleInput.value = null;
    customPercent.value = null;

    fivePercent.classList.remove("active");
    tenPercent.classList.remove("active");
    fifteenPercent.classList.remove("active");
    twentyFivePercent.classList.remove("active");
    fiftyPercent.classList.remove("active");

    totalTipAmount.textContent = 0;
    perPersonTotal.textContent = 0;

    resetBtn.style.display = "none";
    resultBtn.style.display = "block";

})