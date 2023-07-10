document.addEventListener("DOMContentLoaded", () => {
  new TypeIt("#animation", {
    speed: 50,
  })
    .type("Praças históricas de Fortaleza.", { delay: 900 })
    .go();
});
