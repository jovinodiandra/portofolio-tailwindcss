//navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const navbarFixed = header.offsetTop;

  if (window.pageYOffset > navbarFixed) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik di luar halaman
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

//dark Mode
const toggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

toggle.addEventListener("change", function () {
  if (toggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});


// cek apakah toggle nya di mode yg sesuai
if (
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  )
) {
  toggle.checked = true;
} else {
  toggle.checked = false;
}
