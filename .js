document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'password') {
            message.textContent = 'Login successful!';
            message.style.color = 'green';
        }

        else {
            message.textContent = 'Invalid username or password.';
            message.style.color = 'red';
        }
    });
});