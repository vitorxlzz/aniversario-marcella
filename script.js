// CONTROLE DE MÚSICA
const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.3; // Volume em 30%

// Tentar autoplay ao carregar a página
window.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play().catch(() => {
      console.log("Autoplay bloqueado pelo navegador");
    });
  }
}, { once: true });

let globalHeartInterval = null;

function criarCoracao(size = 24, zIndex = 1, container = document.body, extraClass = "") {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.className = `heart ${extraClass}`.trim();
  heart.style.left = Math.random() * 90 + "vw";
  heart.style.fontSize = size + "px";
  heart.style.zIndex = zIndex;
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

if (!globalHeartInterval) {
  criarCoracao(24, 1, document.body, "global-heart");
  globalHeartInterval = setInterval(() => criarCoracao(24, 1, document.body, "global-heart"), 450);
}
