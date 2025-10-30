document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, textarea');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = message;
        errorElement.style.color = 'red';
        input.style.borderColor = 'red';
    }

    function clearError(input) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = '';
        input.style.borderColor = '';
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        inputs.forEach(input => clearError(input));

        inputs.forEach(input => {
            if(input.value.trim() === '') {
                showError(input, `${input.placeholder} is required`);
                isValid = false;
            } else if(input.type === 'email' && !validateEmail(input.value)) {
                showError(input, 'Please enter a valid email');
                isValid = false;
            }
        });

        if(isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            clearError(this);
        });
    });
});