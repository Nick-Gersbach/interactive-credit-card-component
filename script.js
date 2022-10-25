// UI Variables
const form = document.getElementById("cc-form");
const nameInput = document.getElementById("name-input");
const creditCardInput = document.getElementById("cc-number-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const cvcInput = document.getElementById("cvc-input");
const confirmBtn = document.getElementById("confirm-btn");
const thankYouMessage = document.getElementById("email-thankyou-message");

// SHOW INPUT ERROR MESSAGE
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// SHOW SUCCESS BORDER
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// SUBMIT FORM AND DISPLAT THAN YOU MESSAGE
function displayThankYou(event) {
  // thankYouMessage.classList.add("show");
  // form.style.display = "none";

  event.preventDefault();

  if (nameInput.value === "") {
    showError(nameInput, "Can't be blank");
  } else {
    showSuccess(nameInput);
  }

  if (creditCardInput.value === "") {
    showError(creditCardInput, "Can't be blank");
  } else {
    showSuccess(creditCardInput);
  }

  if (monthInput.value === "") {
    showError(monthInput);
  } else {
    showSuccess(monthInput);
  }

  if (yearInput.value === "") {
    showError(yearInput);
  } else {
    showSuccess(yearInput);
  }

  if (cvcInput.value === "") {
    showError(cvcInput);
  } else {
    showSuccess(cvcInput);
    thankYouMessage.classList.add("show");
    form.style.display = "none";
  }
}

//Add Spaces every 4 Numbers for CC Number
function checkCardNumber(e) {
  let target = e.target,
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
}

//EVENT LISTENERS
form.addEventListener("submit", displayThankYou);
creditCardInput.addEventListener("input", checkCardNumber);
