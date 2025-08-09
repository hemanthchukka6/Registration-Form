const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
        valid = false;
    } else {
        showSuccess(nameInput);
    }

    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required');
        valid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Email is not valid');
        valid = false;
    } else {
        showSuccess(emailInput);
    }

    if (passwordInput.value.trim() === '') {
        showError(passwordInput, 'Password is required');
        valid = false;
    } else if (passwordInput.value.length < 6) {
        showError(passwordInput, 'Password must be at least 6 characters');
        valid = false;
    } else {
        showSuccess(passwordInput);
    }

    if (confirmPasswordInput.value.trim() === '') {
        showError(confirmPasswordInput, 'Please confirm your password');
        valid = false;
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, 'Passwords do not match');
        valid = false;
    } else {
        showSuccess(confirmPasswordInput);
    }

    if (valid) {
        successMessage.textContent = 'Registration successful!';
        successMessage.classList.add('active');
        setTimeout(() => {
            successMessage.classList.remove('active');
        }, 1500);
        form.reset();
        clearFormStyles();
    }
});

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
    small.style.visibility = 'visible';
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    const small = formControl.querySelector('small');
    small.innerText = '';
    small.style.visibility = 'hidden';
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clearFormStyles() {
    const controls = form.querySelectorAll('.form-control');
    controls.forEach(control => {
        control.classList.remove('error');
        const small = control.querySelector('small');
        if (small) {
            small.style.visibility = 'hidden';
            small.innerText = '';
        }
    });
}

