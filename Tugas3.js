document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let valid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("successMessage").innerText = "";

    if (name.length <= 3) {
        document.getElementById("nameError").innerText = "Nama harus lebih dari 3 karakter.";
        valid = false;
    }

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Email tidak valid.";
        valid = false;
    }

    if (password.length < 8) {
        document.getElementById("passwordError").innerText = "Password harus minimal 8 karakter.";
        valid = false;
    }

    if (valid) {
        document.getElementById("successMessage").innerText = "Form berhasil divalidasi!";
    }
});