
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-submit");
const loginErrorMessage = document.getElementById("login-error");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if(username === "rowan" && password === "rowan") {
        alert("Welcome to the Rowan Scheduler!");
        location.reload();
    } else {
        alert("Invalid username or password!");
        location.reload();
    }
})