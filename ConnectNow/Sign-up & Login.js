
document.addEventListener('DOMContentLoaded', function() {
    var signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        signupForm.reset();
    });
});