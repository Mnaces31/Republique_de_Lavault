const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("closeMenu");

const mainPanel = document.getElementById("mainPanel");
const provincePanel = document.getElementById("provincePanel");

const goProvinces = document.getElementById("goProvinces");
const backBtn = document.getElementById("backBtn");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  overlay.classList.remove("show");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open");

  mainPanel.classList.add("open");
  provincePanel.classList.remove("open");
});

goProvinces.addEventListener("click", () => {
  mainPanel.classList.remove("open");
  provincePanel.classList.add("open");
});

backBtn.addEventListener("click", () => {
  provincePanel.classList.remove("open");
  mainPanel.classList.add("open");
});
