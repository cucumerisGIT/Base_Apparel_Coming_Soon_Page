// Elements
var form = document.getElementById("form");
var email = document.getElementById("email");
// Error elements
var errorIcon = document.getElementById("error-icon");
var errorMsg = document.getElementById("error-msg");
// Verify the email
var isValidEmail = function (email) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return !!email && regex.test(email);
};
// Handle form submit
var onFormSubmit = function (e) {
    e.preventDefault();
    var isEmailValid = isValidEmail(email.value);
    email.classList.toggle("form__email--error", !isEmailValid);
    errorIcon.toggleAttribute("hidden", isEmailValid);
    errorMsg.toggleAttribute("hidden", isEmailValid);
};
form.addEventListener("submit", onFormSubmit);
