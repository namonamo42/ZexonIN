// Плавная прокрутка уже есть выше

// Анимации появления при скролле
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

faders.forEach(el => observer.observe(el));
