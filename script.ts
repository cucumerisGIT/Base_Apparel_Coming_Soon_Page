// Elements

const form = document.getElementById("form") as HTMLFormElement;
const email = document.getElementById("email") as HTMLInputElement;

// Error elements
const errorIcon = document.getElementById("error-icon") as HTMLImageElement;
const errorMsg = document.getElementById("error-msg") as HTMLParagraphElement;

// Verify the email
const isValidEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return !!email && regex.test(email);
}

// Handle form submit
const onFormSubmit = (e: Event) => {
    e.preventDefault();

    const isEmailValid = isValidEmail(email.value);

    email.classList.toggle("form__email--error", !isEmailValid);
    errorIcon.toggleAttribute("hidden", isEmailValid);
    errorMsg.toggleAttribute("hidden", isEmailValid);
}

form.addEventListener("submit", onFormSubmit)