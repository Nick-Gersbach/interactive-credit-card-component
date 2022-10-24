// UI Variables
const confirmBtn = document.getElementById("confirm-btn");
const thankYouMessage = document.getElementById("email-thankyou-message");
const form = document.getElementById("cc-form");

confirmBtn.addEventListener("click", displayThankYou);

function displayThankYou(event) {
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
