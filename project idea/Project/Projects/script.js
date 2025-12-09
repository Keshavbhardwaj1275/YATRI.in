 // Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password"); // Assuming password field exists
  const loginInfoSection = document.querySelector(".login-info");

  // Fake user data for login validation
  const fakeUsers = [
      { email: "testuser1@example.com", password: "password123" },
      { email: "john.doe@example.com", password: "john123" },
      { email: "jane.smith@example.com", password: "jane2024" }
  ];

  // Handle form submission
  form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default form submission

      // Get input values
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      // Basic validation
      if (!email || !password) {
          alert("Both email and password are required.");
          return;
      }

      // Check if user exists in the fake data
      const user = fakeUsers.find(
          (user) => user.email === email && user.password === password
      );

      if (user) {
          // If user is valid, redirect to main.html
          alert("Login Successful! Redirecting to the homepage...");
          window.location.href = "main.html"; // Redirect to main.html
      } else {
          // If user is not found, show an error message
          alert("User not registered. Please check your credentials.");
      }

      // Optionally clear the form
      form.reset();
  })});
  