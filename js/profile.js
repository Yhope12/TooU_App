// NAVIGATION
function goTo(page) {
  window.location.href = page;
}

// DARK MODE TOGGLE
const toggle = document.getElementById("toggle");
const modeText = document.getElementById("modeText");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  // Save preference
  localStorage.setItem("darkMode",isDark);
  modeText.innerText= isDark? "🌑Dark Mode":"🔆Light Mode";
});

// LOAD SAVED MODE
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
  toggle.classList.add("active");
  modeText.innerText="🌑Dark Mode";
}
else{
  modeText.innerText="🔆Light Mode";
}

// LOGOUT
function logout() {
  alert("Logged out!");
  window.location.href = "login.html";
}

function goWriter(){
  window.location.href = "./writer.html";
}