const toggleBtn = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-open');
  });