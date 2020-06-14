//Form blur events
document.getElementById('name-input').addEventListener('blur', validateName);
document.getElementById('email-input').addEventListener('blur', validateEmail);
//document.getElementById('name-input').addEventListener('blur', validateDescription);
document.getElementById('password-input').addEventListener('blur', validatePassword);

//On next button click
const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', validateForm);

//getting input fields
const name = document.querySelector('#name-input');
const email = document.querySelector('#email-input');
const password = document.querySelector('#password-input');
const description = document.querySelector('#description-input');

//creating regex
const re = /^[a-zA-Z]{2,10}$/;
const re1 = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const re2 = /^[a-zA-Z0-9!@#$~%^&*()_+]{8,}$/;

//match and validate name
function validateName() {
    const label = document.querySelector('#name-label');

    if(!re.test(name.value)){
        label.className = 'is-invalid';
        showAlert('Name must be between 2 and 10 characters', 'error');
    } else {
        label.classList.remove('is-invalid');
    }
}

//match and validate email
function validateEmail() {
    const label = document.querySelector('#email-label');

    if(!re1.test(email.value)){
        label.className = 'is-invalid';
        showAlert('Input a valid email', 'error');
    } else {
        label.classList.remove('is-invalid');
    }
}

//match and validate password
function validatePassword() {
    const label = document.querySelector('#password-label');

    if(!re2.test(password.value)){
        label.className = 'is-invalid';
        showAlert('Password should be more than 8 characters and include numbers and other characters', 'error');
    } else {
        label.classList.remove('is-invalid');
    }
}

//validate entire form
function validateForm(e) {
    if(name.value === '' || email.value === '' || description.value === 'option0' || password.value === '') {
        showAlert('Please fill all fields in the form', 'error');
    } else {
        if(!re.test(name.value) || !re1.test(email.value) || !re2.test(password.value)) {
            showAlert('Please fill all fields in the form correctly', 'error');
        } else {
            showAlert('Form validated', 'success');
        }
    }

    e.preventDefault();
}

//display error messages
function showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.sign-up');
    // Get form
    const form = document.querySelector('#name-div');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}