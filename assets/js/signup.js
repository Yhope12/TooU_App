const signupForm = document.getElementById("signupForm");
const signupMessage = document.getElementById("signupMessage");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(signupForm);
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (password !== confirmPassword) {
    signupMessage.textContent = "Passwords do not match yet. Please make both password fields the same.";
    signupMessage.classList.remove("success");
    return;
  }

  const account = {
    username: formData.get("username"),
    email: formData.get("email")
  };

  localStorage.setItem("toouUserAccount", JSON.stringify(account));
  signupMessage.textContent = "Account created on this device. You can now continue as a reader or register as a creator.";
  signupMessage.classList.add("success");
  signupForm.reset();
});
