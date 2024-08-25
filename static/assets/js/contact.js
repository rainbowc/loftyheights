const form = document.getElementById("contact-form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const company = document.getElementById("company");
const budget = document.getElementById("budget");
const comment = document.getElementById("comment");

// Function to show error messages
function showError(inputField, message) {
  const formGroup = inputField.parentElement; // Get the parent form-group
  formGroup.className = "form-group error"; // Add 'error' class
  const errorMessage = formGroup.querySelector("small"); // Select error message element
  errorMessage.innerText = message;
}

// Function to clear errors
function clearError(inputField) {
  const formGroup = inputField.parentElement;
  formGroup.className = "form-group"; // Remove error class
}

// Function to check if an input field is empty
function checkRequired(inputFields) {
  inputFields.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${input.id} is required`);
    } else {
      clearError(input);
    }
  });
}

// Function to check email validity
function checkEmail(emailInput) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailInput, "Please enter a valid email address");
  } else {
    clearError(emailInput);
  }
}

// Event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Check for required fields
  checkRequired([firstName, lastName, email, phone]);

  // Check email validity
  checkEmail(email);

  // Check that there are no error classes left
  const formGroups = form.querySelectorAll(".form-group");
  let formIsValid = true;
  formGroups.forEach((group) => {
    if (group.classList.contains("error")) {
      formIsValid = false;
    }
  });

  // Submit if the form is valid
  if (formIsValid) {
    // Collect form data for console logging
    const formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      company: company.value,
      budget: budget.value,
      comment: comment.value,
    };

    console.log(formData);

    // Clear the form
    form.reset();
  }
});
