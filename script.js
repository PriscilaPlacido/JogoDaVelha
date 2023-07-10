const text = document.querySelector(".hidden");
const text2 = document.querySelector(".hidden2");
const text3 = document.querySelector(".hidden-3");
const text4 = document.querySelector(".hidden4");

document.querySelector("button").addEventListener("click", () => {
  text.style.opacity = "1";
});

document.querySelector(".fa-xmark").addEventListener("click", () => {
  text.style.opacity = "0";
});

document.querySelector(".but2").addEventListener("click", () => {
  text2.style.opacity = "1";
});

document.querySelector(".del2").addEventListener("click", () => {
  text2.style.opacity = "0";
});

document.querySelector(".but3").addEventListener("click", () => {
  text3.style.opacity = "1";
});

document.querySelector(".del3").addEventListener("click", () => {
  text3.style.opacity = "0";
});

document.querySelector(".but4").addEventListener("click", () => {
  text4.style.opacity = "1";
});

document.querySelector(".del4").addEventListener("click", () => {
  text4.style.opacity = "0";
});

document.querySelector(".cont").addEventListener("click", () => {
  document.querySelector(".contatos").classList.toggle("hidden-nav");
});

document.querySelector(".prac").addEventListener("click", () => {
  document.querySelector(".pracas").classList.toggle("hidden-nav");
});
