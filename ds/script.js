// Captura o elemento do quadrado/card
const card = document.getElementById('marvel-card');

// Evento quando o mouse entra no card
card.addEventListener('mouseenter', () => {
    // Aplica uma leve rotação de perspectiva para deixar o visual mais vivo
    card.style.transform = "perspective(1000px) rotateY(3deg)";
    card.style.transition = "transform 0.3s ease, width 0.5s ease";
});

// Evento quando o mouse sai do card
card.addEventListener('mouseleave', () => {
    // Retorna o card para a posição original plana
    card.style.transform = "perspective(1000px) rotateY(0deg)";
});