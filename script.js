const toggleBtn = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-open');
  });

  // FAQs Carousel 
  const carousel = document.getElementById('faq-carousel');
  const next = document.getElementById('faq-next');
  const prev = document.getElementById('faq-prev');

  next.addEventListener('click', () => {
    carousel.scrollBy({ left: 400, behavior: 'smooth' });
  });

  prev.addEventListener('click', () => {
    carousel.scrollBy({ left: -400, behavior: 'smooth' });
  });

  // Autoplay every 4 seconds
  setInterval(() => {
    carousel.scrollBy({ left: 400, behavior: 'smooth' });
  }, 4000);

  // Testimonials 

 window.addEventListener("DOMContentLoaded", function () {
  const testimonials = [
    {
      text: "“Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.”",
      name: "Hellen Jummy",
      role: "Team Lead",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "“Working with them was a pleasure. They are extremely professional and delivered on time.”",
      name: "John Smith",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "“Their team has helped us grow tremendously over the past year. Highly recommended!”",
      name: "Ava Johnson",
      role: "Marketing Head",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  let index = 0;

  const testimonialEl = document.getElementById("testimonial");
  const nameEl = document.getElementById("user-name");
  const roleEl = document.getElementById("user-role");
  const imageEl = document.getElementById("user-image");

  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  function updateTestimonial() {
    const t = testimonials[index];
    testimonialEl.textContent = t.text;
    nameEl.textContent = t.name;
    roleEl.textContent = t.role;
    imageEl.src = t.image;
  }

  function nextSlide() {
    index = (index + 1) % testimonials.length;
    updateTestimonial();
  }

  function prevSlide() {
    index = (index - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  updateTestimonial();

  setInterval(nextSlide, 5000);
});


