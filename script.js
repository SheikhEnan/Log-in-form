document.getElementById('login-btn').addEventListener('click', function(event) {
    // Input ebong Error element gulo ke dhori
    const passwordInput = document.getElementById('password');
    const error = document.getElementById('error');

    if (passwordInput.value.length < 8) {
        error.style.display = 'block';
        passwordInput.style.border = '2px solid red';
    } else {
        error.style.display = 'none';
        passwordInput.style.border = '2px solid green';
        alert("Login Successful!");
    }
});