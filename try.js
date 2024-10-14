const form = document.getElementById("form");
const names = document.getElementById("fullName");
const email = document.getElementById("email");
const age = document.getElementById("age");
const checkbox = document.getElementById("checkbox");

const namesError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const checkError = document.getElementById("checkError");

form.addEventListener("submit", (el) => {
  el.preventDefault();
  submitForm();
});

function submitForm() {
  const nameValue = names.value.trim();
  if (nameValue.length < 3) {
    namesError.textContent =
      "Please, enter full name must be more 3 characters";
    namesError.style.color = "red";
    names.style.border = "1px red solid";
  } else {
    names.style.border = "1px green solid";
  }

  const ageValue = age.value.trim();
  if (ageValue < 18 || ageValue > 30) {
    ageError.textContent = "You are not allowed";
    ageError.style.color = "red";
    age.style.border = "1px red solid";
  } else {
    age.style.border = "1px green solid";
  }

  const emailValue = email.value.trim();
  const Regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9{2,4}$]/;
  if (Regex.test(emailValue) === false) {
    emailError.textContent = "Please enter a valid email";
    emailError.style.color = "red";
    email.style.border = "1px solid red";
  } else {
    email.style.border = "1px solid green";
  }

  if (checkbox.checked === false) {
    checkError.textContent = "please, read terms and conditions";
    checkError.style.color = "red";
    checkbox.style.backgroundColor = "red";
  } else {
    checkbox.style.color = "green";
  }
}
