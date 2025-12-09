
from flask import Flask, request, redirect, url_for, render_template

app = Flask(__name__)

# Sample user data (Replace with database or external file in production)
users = {
    "user1": "password1",
    "user2": "password2"
}

@app.route("/")
def home():
    return "Welcome! Please log in at /login"

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        # Check credentials
        if username in users and users[username] == password:
            return redirect(url_for("main_page"))
        else:
            return "Invalid username or password. Try again."

    # Render login form
    return render_template("login.html")

@app.route("/main")
def main_page():
    return render_template("main.html")  # Render main/home page

if __name__ == "__main__":
    app.run(debug=True)
