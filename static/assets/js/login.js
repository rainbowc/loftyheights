// JavaScript code for the login design screen

// Get the form element by its id
var form = document.getElementById("login-form");

// Add an event listener for the form submission
form.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the username and password input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Validate the username and password input values
  if (username === "" || password === "") {
    // If either username or password is empty, alert the user
    alert("Please enter your username and password.");
  } else if (username.length < 4 || password.length < 4) {
    // If either username or password is too short, alert the user
    alert("Your username and password must be at least 4 characters long.");
  } else {
    // If both username and password are valid, alert the user
    alert("You have successfully logged in.");
  }
});
