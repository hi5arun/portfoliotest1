// Placeholder for additional JS if needed
AOS.init({ once: true, duration: 800 });

// Testimonials carousel with autoplay + dots
const track = document.getElementById('testimonial-track');
const dotsContainer = document.getElementById('testimonial-dots');
const slides = track.children;
let index = 0;

if (slides.length > 0) {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('button');
    dot.className = 'w-3 h-3 rounded-full bg-gray-400';
    dot.addEventListener('click', () => {
      index = i;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  }

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
    [...dotsContainer.children].forEach((d, i) => d.className = `w-3 h-3 rounded-full ${i === index ? 'bg-brand-primary' : 'bg-gray-400'}`);
  }

  function autoPlay() {
    index = (index + 1) % slides.length;
    updateCarousel();
  }

  updateCarousel();
  setInterval(autoPlay, 5000);
}