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
const perPersonTipOutput = document.querySelector(".tip-per-person-output");
const perPersonTotal = document.querySelector(".per-person-total-paragraph");

// button element
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    console.log("button clicked");
})