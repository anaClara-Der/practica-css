const menuHamburguer = document.querySelector(".nav-hamburguer");
const menuCerrar = document.querySelector(".nav-cerrar");
const menuMovil = document.querySelector(".menu-movil");

menuHamburguer.addEventListener("click", () => {
  menuCerrar.classList.toggle("abrir");
  menuMovil.classList.toggle("abrir");
  menuHamburguer.classList.toggle("cerrar");
});

menuCerrar.addEventListener("click", () => {
  menuCerrar.classList.toggle("abrir");
  menuMovil.classList.toggle("abrir");
  menuHamburguer.classList.toggle("cerrar");
});
