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

// Kirim form kontak ke Formspree tanpa reload halaman
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const submitButton = contactForm.querySelector("button[type='submit']");
  submitButton.disabled = true;
  submitButton.textContent = "Mengirim...";
  formStatus.classList.add("hidden");

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      formStatus.textContent = "Pesan berhasil terkirim, terima kasih!";
      formStatus.classList.remove("hidden", "text-red-500");
      formStatus.classList.add("text-primary");
      contactForm.reset();
    } else {
      throw new Error("Gagal mengirim");
    }
  } catch (error) {
    formStatus.textContent =
      "Maaf, pesan gagal terkirim. Coba lagi atau email langsung ke jovinodiandra230@gmail.com.";
    formStatus.classList.remove("hidden", "text-primary");
    formStatus.classList.add("text-red-500");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Kirim";
  }
});
