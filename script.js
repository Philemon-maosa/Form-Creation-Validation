document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        console.log("Form submission intercepted for validation");

        // Get and trim input values
        const email = document.getElementById("email").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validation logic
        let isValid = true;
        let messages = [];

        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must include '@' and '.' characters.");
        }

        if (password.length < 8) {
            isValid = false;
            messages.push("Password must have at least 8 characters.");
        }

        // ✅ Ensure the feedback div is visible
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            // Use messages.join("<br>") to show all errors
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});
