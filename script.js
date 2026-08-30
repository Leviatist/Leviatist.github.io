document.getElementById("searchBtn").addEventListener("click", performSearch);
document.getElementById("searchInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") performSearch();
});

// Engine switcher
let currentEngine = "bing";
const engineSwitcher = document.getElementById("engineSwitcher");
const engineLabel = document.getElementById("engineLabel");
const engineNames = { bing: "Bing", google: "Google" };

engineSwitcher.addEventListener("click", function (e) {
  const dot = e.target.closest(".engine-dot");
  if (!dot) return;

  currentEngine = dot.dataset.engine;
  engineSwitcher.querySelectorAll(".engine-dot").forEach(function (d) {
    d.classList.toggle("active", d.dataset.engine === currentEngine);
  });
  engineLabel.textContent = engineNames[currentEngine];
});

function performSearch() {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) return;

  let url = "";
  if (currentEngine === "google") {
    url = "https://www.google.com/search?q=" + encodeURIComponent(query);
  } else {
    url = "https://www.bing.com/search?q=" + encodeURIComponent(query);
  }
  window.open(url, "_blank");
}

const progressBar = document.querySelector(".progress-bar");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = progress + "%";
});
