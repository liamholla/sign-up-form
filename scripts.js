const password = document.getElementById("password");
const password_confirm = document.getElementById("confirm-password");

password_confirm.addEventListener("keyup", function () {
  if (password.value === password_confirm.value) {
    console.log("Passwords match!");
    password_confirm.style.borderColor = "green";
  } else {
    console.log("Passwords do not match!");
    password_confirm.style.borderColor = "red";
  }
});
