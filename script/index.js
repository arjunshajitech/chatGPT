
document.addEventListener('DOMContentLoaded', function () {
    var inputField = document.getElementById('login-input-field');
    var inputText = document.getElementById('input-text-label');
    var input = document.querySelector('input[type="text"][name="login-input-field"]');


    inputField.addEventListener('focus', function () {
        inputText.classList.add('on-input-focus');
        input.classList.add('border-color');
    });

    inputField.addEventListener('blur', function () {
        if (inputField.value.trim() === '') {
            inputText.classList.remove('on-input-focus');
            input.classList.remove('border-color');
        }
    });
});


focusInput = () => {
    let inputField = document.getElementById('login-input-field');
    inputField.focus();
}

validateEmail = () => {
    var inputField = document.getElementById('login-input-field');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(inputField.value.trim())) {
        return true;
    }
    return false;
}

validateEmailAddress = () => {
    var inputField = document.getElementById('login-input-field');
    var inputText = document.getElementById('input-text-label');
    var input = document.querySelector('input[type="text"][name="login-input-field"]');

    if (inputField.value.trim() === '') {
        input.classList.remove('border-color');
        inputText.classList.add('on-input-focus');
        inputText.classList.add('error-text-color');
        input.classList.add('error-border-color');
    } else {
        var isValidEmail = validateEmail();
        if (isValidEmail === false) {
            input.classList.remove('border-color');
            inputText.classList.add('on-input-focus');
            inputText.classList.add('error-text-color');
            input.classList.add('error-border-color');
        } else {
            inputText.classList.remove('error-text-color');
            input.classList.remove('error-border-color');
            inputText.classList.remove('on-input-focus');
            input.classList.remove('border-color');
            alert('Welcome back ' + input.value.trim());
            input.value = '';
        }
    }
}