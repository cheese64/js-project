
const registerForm = document.getElementById("register-form");
const registerButton = document.getElementById("register-submit");
const registerErrorMessage = document.getElementById("register-error");

registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    const username = registerForm.username.value;
    const password = registerForm.password.value;

    if(username === "rowan" && password === "rowan") {
        alert("Welcome to the Rowan Scheduler!");
        location.reload();
    } else {
        alert("Invalid username or password!");
        location.reload();
    }
})