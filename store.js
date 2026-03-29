function showTab(tabName,event){

document.querySelectorAll(".tab-content")
.forEach(t=>t.classList.remove("active"));

document.querySelectorAll(".tab")
.forEach(t=>t.classList.remove("active"));

document.getElementById(tabName)
.classList.add("active");

event.target.classList.add("active");

}