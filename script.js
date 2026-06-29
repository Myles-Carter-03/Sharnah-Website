const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.service-card, .about-card, .about-images img, .areas-copy, .areas-map, .testimonial-card, .gallery-grid img')
  .forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });