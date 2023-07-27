// Fungsi untuk inisialisasi Carousel Slider
function initializeCarousel() {
  // Inisialisasi Carousel Slider
  var carousel = new Carousel("#default-carousel", {
    slideDuration: 700,
    slideInterval: 5000,
    enableIndicators: true,
    enableControls: true,
  });
  carousel.init();
}

// Menunggu halaman web selesai dimuat
window.addEventListener("DOMContentLoaded", function () {
  // Panggil fungsi inisialisasi Carousel Slider
  initializeCarousel();
});

// Hamburger Menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Click Anywhere
window.addEventListener("click", (e) => {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});
