// ===== BACK BUTTON =====
function goBack(){
  window.location.href = "writer.html";
}

// ===== LOAD DATA (can connect to backend later) =====
async function loadChart(){

  // 👉 You can replace this with fetch() later
  const chartData = {
    labels: ['Feb 12','Feb 13','Feb 14','Feb 15','Feb 16','Feb 17','Feb 18'],
    views: [4200,4800,5200,6100,5800,6500,7200],
    likes: [800,1200,1500,2000,1800,2300,2600]
  };

  const ctx = document.getElementById('viewsChart').getContext('2d');

  // ===== GRADIENT =====
  const gradient = ctx.createLinearGradient(0, 0, 0, 250);
  gradient.addColorStop(0, 'rgba(161,0,255,0.4)');
  gradient.addColorStop(1, 'rgba(161,0,255,0)');

  // ===== CHART =====
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: "Views",
          data: chartData.views,
          borderColor: '#a100ff',
          backgroundColor: gradient,
          tension: 0.4,
          fill: true,
          pointRadius: 4,
          pointHoverRadius: 7,
          pointBackgroundColor: '#a100ff'
        },
        {
          label: "Likes",
          data: chartData.likes,
          borderColor: '#00c6ff',
          backgroundColor: 'transparent',
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 7
        }
      ]
    },

    options: {
      responsive: true,

      interaction: {
        mode: 'index',
        intersect: false
      },

      plugins: {
        legend: {
          display: true,
          labels: {
            color: '#ccc'
          }
        },

        tooltip: {
          backgroundColor: '#1c2536',
          titleColor: '#fff',
          bodyColor: '#ccc',
          borderColor: '#333',
          borderWidth: 1,
          padding: 10
        }
      },

      scales: {
        x: {
          ticks: { color: '#aaa' },
          grid: { color: 'rgba(255,255,255,0.05)' }
        },
        y: {
          ticks: { color: '#aaa' },
          grid: { color: 'rgba(255,255,255,0.05)' }
        }
      },

      animation: {
        duration: 1500,
        easing: 'easeInOutQuart'
      }
    }
  });

}

loadChart();

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}