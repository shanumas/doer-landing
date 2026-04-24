// Fade in on scroll
const observer = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
  { threshold: 0.1 }
);
document.querySelectorAll(".step, .feature-card, .stat, .os-text").forEach((el) => {
  el.classList.add("fade-in");
  observer.observe(el);
});
