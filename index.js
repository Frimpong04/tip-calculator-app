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


const billInputValue = billInput.value ;
const numberOfPeopleInputValue = numberOfPeopleInput.value;
const customPercentValue = customPercent.value;

// output elements
const perPersonTipOutput = document.querySelector(".tip-per-person-output");
const perPersonTotal = document.querySelector(".per-person-total-paragraph");

// error element
const errorMessage = document.querySelector(".error");

// button element
const btn = document.querySelector("button");

let totalTip;
let tipPercent

// addEventListenr
fivePercent.addEventListener("click", (e) => {
    tipPercent = 5;
    customPercent.value = null;
    console.log(tipPercent);
});

tenPercent.addEventListener("click", () => {
    tipPercent = 10;
    // customPercentValue = null;
    customPercent.value = null;
    console.log(tipPercent);
});

fifteenPercent.addEventListener("click", () => {
    tipPercent = 15;
    // customPercentValue = null;
    customPercent.value = null;
    console.log(tipPercent);
})

twentyFivePercent.addEventListener("click", () => {
    tipPercent = 25;
    // customPercentValue = null;
    customPercent.value = null;
    console.log(tipPercent);
})

fiftyPercent.addEventListener("click", () => {
    tipPercent = 50;
    // customPercentValue = null;
    customPercent.value = null;
    console.log(tipPercent);
})

btn.addEventListener("click", () => {
    console.log("button clicked");

   

    // validation logic
    if(!billInputValue || billInputValue < 0) {
        billInput.classList.add("error");
        return; 
    }

    if(!numberOfPeopleInputValue || numberOfPeopleInputValue < 0) {
        errorMessage.style.visibility = "visible";
        numberOfPeopleInput.classList.add("error");
        return;
    }

    if(customPercentValue) {
        tipPercent = customPercentValue;
    }

    console.log(billInputValue, numberOfPeopleInputValue, customPercentValue, tipPercent);

})