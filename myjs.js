function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phone = document.getElementById('phone').value;

    var usernameRegex = /^[a-zA-Z0-9_]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    var phoneRegex = /^\d{10}$/;

    var isValid = true;
    var errorMessage = "";

    if (!usernameRegex.test(username)) {
        isValid = false;
        errorMessage += "!Invalid username. ";
    }
    if (!emailRegex.test(email)) {
        isValid = false;
        errorMessage += "!Invalid email. ";
    }

    if (!passwordRegex.test(password)) {
        isValid = false;
        errorMessage += "!Invalid password. ";
    }

    if (!phoneRegex.test(phone)) {
        isValid = false;
        errorMessage += "!Invalid phone number. ";
    }

    if (isValid) {
        
        var formData = {
            username: username,
            email: email,
            password: password,
            phone: phone,
            gender: document.getElementById('gender').value,
            country: document.getElementById('country').value
        };

var jsonString = JSON.stringify(formData);


console.log("Form Data Object:", formData);
console.log("JSON String:", jsonString);
} else {

document.getElementById('myForm').insertAdjacentHTML('beforeend', '<div class="error">' + errorMessage + '</div>');
}
}