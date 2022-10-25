// UI Variables
const form = document.getElementById("cc-form");
const nameInput = document.getElementById("name-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const cvcInput = document.getElementById("cvc-input");
const confirmBtn = document.getElementById("confirm-btn");
const thankYouMessage = document.getElementById("email-thankyou-message");

form.addEventListener("submit", displayThankYou);

function displayThankYou(event) {
  console.log("Form Submitted");
  thankYouMessage.classList.add("show");
  form.style.display = "none";

  event.preventDefault();
}

//Add Spaces every 4 Numbers for CC Number
document
  .getElementById("cc-number-input")
  .addEventListener("input", function (e) {
    const target = e.target,
      position = target.selectionEnd,
      length = target.value.length;

    target.value = target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
    target.selectionEnd = position +=
      target.value.charAt(position - 1) === " " &&
      target.value.charAt(length - 1) === " " &&
      length !== target.value.length
        ? 1
        : 0;
  });
