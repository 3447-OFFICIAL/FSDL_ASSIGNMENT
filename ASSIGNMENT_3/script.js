document.getElementById("myForm").addEventListener("submit", function (e) {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let mobile = document.getElementById("mobile").value.trim();

    let valid = true;

    // clear previous errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passError").innerText = "";
    document.getElementById("mobileError").innerText = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Name must not be empty";
        valid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email must not be empty";
        valid = false;
    }
    else if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter valid email";
        valid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passError").innerText = "Password must be at least 6 characters";
        valid = false;
    }

    // Mobile validation
    let mobilePattern = /^[0-9]{10}$/;
    if (!mobile.match(mobilePattern)) {
        document.getElementById("mobileError").innerText = "Enter valid 10-digit mobile";
        valid = false;
    }

    // Stop submit if invalid
    if (!valid) {
        e.preventDefault();
    }
    else {
        alert("Form submitted successfully!");
    }

});