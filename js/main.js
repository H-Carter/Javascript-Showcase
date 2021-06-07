
// Password Visibility
// Variables
let showPasswordCheckbox = document.querySelector('#show-password');
let userPassword = document.querySelector('#password');
// Event Listener
showPasswordCheckbox.addEventListener('click', function() {
    if (showPasswordCheckbox.checked) {
        userPassword.type = "text";
    } else {
        userPassword.type = "password";
    }
});