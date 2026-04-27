const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
        // JavaScript to handle form submission and redirect
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // You can add validation or API call for authentication here
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // For now, we'll simply check if the fields are not empty
            if (username && password) {
                // Simulating successful login
                alert('Login successful! Redirecting to homepage...');
                
                // Redirect to the homepage (replace 'homepage.html' with your actual homepage file)
                window.location.href = 'C:\Users\HP\Documents\yatri_updated[1]\yatri\project idea\Project\Projects\main.html';
            } else {
                alert('Please enter valid credentials.');
            }
        });
