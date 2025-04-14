document
.getElementById("loginForm")
.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const loginError = document.getElementById("loginError");

  // Reset all error messages
  emailError.style.display = "none";
  emailError.textContent = "";
  passwordError.style.display = "none";
  passwordError.textContent = "";
  loginError.style.display = "none";
  loginError.textContent = "";

  // Validate email
  if (!email) {
    emailError.textContent = "Vui lòng nhập email";
    emailError.style.display = "block";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Email không đúng định dạng";
    emailError.style.display = "block";
    return;
  }

  // Validate password
  if (!password) {
    passwordError.textContent = "Vui lòng nhập mật khẩu";
    passwordError.style.display = "block";
    return;
  }

  if (password.length < 8) {
    passwordError.textContent = "Mật khẩu phải có ít nhất 8 ký tự";
    passwordError.style.display = "block";
    return;
  }

  // Check login credentials
  if (typeof login === "function" && login(email, password)) {
    window.location.href = "./project-manager.html";
  } else {
    loginError.textContent = "Email hoặc mật khẩu không đúng";
    loginError.style.display = "block";
  }
});