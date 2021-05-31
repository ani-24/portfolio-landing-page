/* Cursor */
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});

const navLinks = document.querySelectorAll("a");
navLinks.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("expand");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("expand");
  });
});

const hamburger = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav-container");

const themeToggle = document.querySelector(".theme-toggle-btn");

const heroHeading = document.querySelector(".hero-heading");

let windowWidth = window.innerWidth;

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("cross");
  navContainer.classList.toggle("show");
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("change");
});

const heroSection = document.querySelector(".hero-section");

/* To check a touch device */
const is_touch_enabled = () => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

if (is_touch_enabled()) {
  document.body.removeChild(cursor);
}

const logo = document.querySelector(".logo");
logo.innerHTML = logo.textContent
  .split("")
  .map((ltr) => `<span class="logo-ltr">${ltr}</span>`)
  .join("");

document.addEventListener("DOMContentLoaded", () => {
  logo.classList.add("animate");
});
