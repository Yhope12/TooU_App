// ===== BACK BUTTON =====
function goBack(){
  window.location.href = "writer.html";
}

// Select cards
const cards=document.querySelectorAll('.card');
cards.forEach(c=>{
  c.addEventListener('click',()=>{
    cards.forEach(x=>x.classList.remove('active'));
    c.classList.add('active');
  })
})

// Validation
function publish(){
  const title=document.getElementById('title').value.trim();
  const genre=document.getElementById('genre').value.trim();
  const synopsis=document.getElementById('synopsis').value.trim();

  if(!title || !genre || !synopsis){
    alert('Please fill all required fields!');
    return;
  }

  alert('Published successfully!');
}

// Toggle coin input
function toggleCoin(){
  const free=document.getElementById('freeEpisode').checked;
  const coin=document.getElementById('coin');
  coin.disabled=free;
}

// init state
window.onload=toggleCoin;

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}