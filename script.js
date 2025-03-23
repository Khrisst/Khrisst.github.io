document.addEventListener("DOMContentLoaded", function() {
    const flor = document.getElementById("flor");
    const numPetalos = 8;    // Se generarán 8 pétalos
    const distancia = 80;    // Distancia desde el centro de la flor (radio = 80px)
  
    for (let i = 0; i < numPetalos; i++) {
      const petalo = document.createElement("div");
      petalo.classList.add("petalo");
      const angulo = i * (360 / numPetalos);
      // Se posicionan los pétalos de forma circular
      petalo.style.transform = `translate(-50%, -100%) rotate(${angulo}deg) translateY(${distancia}px)`;
      flor.appendChild(petalo);
    }
  });