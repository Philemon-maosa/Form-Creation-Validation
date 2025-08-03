document.addEventListener("DOMContentLoaded", function() {

document.getElementById("registration-form").addEventistener("submit, function(event) {
event.preventDefault();

console.log("form submission intercepted for validation");
});

const form = document.getElementById("registration-form");
const email = document.getElementById("email").value.trim();
const username = document.getElementById("username").value.trim();
const password = document.getElementById("password").value.trim();
const feedbackDiv = document.getElementById("form-feedback");

});

let isValid = true;
let messages = [];

if(username.length < 3) {
   isValid === false;
   messages.push("username must be 3 characters long.");
}

if(!email.includes("@") || !email.includes(".")) {
 isValid= false;
 messages.psh("username must include '@' and '.' characters");
}

if(password.length < 8) {
 isValid= false;
 messages.push("password must have atleast 8 characters");
}

if(isValid) {
feedbackDiv.textContent = "Registration successful!";
feedbackDiv.style.color = "#28a745";
 } else {
feedbackDiv.innerHTML = messages.joi("<br>");
feedbackDiv.style.color = "#dc3545";
 }
});