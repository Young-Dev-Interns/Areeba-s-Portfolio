// Sidebar toggle
document.querySelector('.menu-toggle').addEventListener('click', ()=> {
  document.querySelector('.side-nav').classList.toggle('open');
});
// Close on link click
document.querySelectorAll('.side-nav a').forEach(a =>
  a.addEventListener('click', ()=>{
    document.querySelector('.side-nav').classList.remove('open');
  })
);
// Smooth scroll
document.querySelector('.scroll-down').addEventListener('click', ()=>{
  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
});

const cursor = document.createElement('div');
cursor.id = 'cursor';
document.body.appendChild(cursor);

// on every mouse move:
document.addEventListener('mousemove', e => {
  // move the main cursor
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

  // create a little trail dot
  const dot = document.createElement('div');
  dot.className = 'trail';
  dot.style.left = `${e.clientX - 6}px`;  // center the 12px dot
  dot.style.top  = `${e.clientY - 6}px`;
  document.body.appendChild(dot);

  // remove it after the animation ends
  setTimeout(() => dot.remove(), 500);
});


//Services
// 3D tilt effect
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 20;   // ±10°
    const rotateX = ((y / rect.height) - 0.5) * -20; // ±10°
    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  });

  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.1s ease';
  });
});


// 3D tilt effect on the white container
const container = document.querySelector('.contact-container');

container.addEventListener('mousemove', e => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const rotY = ((x / rect.width)  - 0.5) * 15;   // ±7.5°
  const rotX = ((y / rect.height) - 0.5) * -15;  // ±7.5°
  container.style.transform = `
    perspective(1000px)
    rotateX(${rotX}deg)
    rotateY(${rotY}deg)
  `;
});

container.addEventListener('mouseleave', () => {
  container.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});

// === mailto: form submit ===
const form = document.querySelector('.contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Grab the values
  const name    = form.querySelector('input[type="text"]').value.trim();
  const email   = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector('textarea').value.trim();

  // Your address here:
  const recipient = 'areebamughal494@gmail.com';

  // Build mailto link
  const subject = encodeURIComponent(`New contact from ${name}`);
  const body    = encodeURIComponent(
    `Name: ${name}\n` +
    `Email: ${email}\n\n` +
    `Message:\n${message}`
  );

  // Redirect to mailto: (opens user's email client)
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});



// ----- Carousel Logic -----
const track     = document.querySelector('.slider-track');
const slides    = Array.from(track.children);
const prevBtn   = document.querySelector('.slider-arrow.prev');
const nextBtn   = document.querySelector('.slider-arrow.next');
let index = 0;

// update that track position
function updateSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

// loop on arrows
nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateSlide();
});
prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
});

// auto-loop every 5s
setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlide();
}, 5000);

// ----- 3D Tilt Effect -----
const slider = document.querySelector('.slider-container');
slider.addEventListener('mousemove', e => {
  const rect = slider.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const rotY = ((x / rect.width)  - 0.5) * 15;   // ±7.5°
  const rotX = ((y / rect.height) - 0.5) * -15;  // ±7.5°
  slider.style.transform = `
    perspective(1000px)
    rotateX(${rotX}deg)
    rotateY(${rotY}deg)
  `;
});
slider.addEventListener('mouseleave', () => {
  slider.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});


