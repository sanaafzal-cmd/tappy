const toggleBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-open");
});

// FAQs Carousel
const carousel = document.getElementById("faq-carousel");
const next = document.getElementById("faq-next");
const prev = document.getElementById("faq-prev");

next.addEventListener("click", () => {
  carousel.scrollBy({ left: 400, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  carousel.scrollBy({ left: -400, behavior: "smooth" });
});

// Autoplay every 4 seconds
setInterval(() => {
  carousel.scrollBy({ left: 400, behavior: "smooth" });
}, 4000);

// Testimonials
