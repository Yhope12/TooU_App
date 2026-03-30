// NAVIGATION
function goTo(page) {
  window.location.href = page;
}

// DARK MODE TOGGLE
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  document.body.classList.toggle("dark");

  // Save preference
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
});

// LOAD SAVED MODE
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
  toggle.classList.add("active");
}

// LOGOUT
function logout() {
  alert("Logged out!");
  window.location.href = "login.html";
}
