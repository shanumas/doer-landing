// Fade in on scroll
const observer = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
  { threshold: 0.1 }
);
document.querySelectorAll(".step, .feature-card, .stat, .os-text").forEach((el) => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// Fetch and display GitHub star count
async function updateStarCount() {
  const starButton = document.getElementById('star-button');
  if (!starButton) return;

  try {
    const response = await fetch('https://api.github.com/repos/shanumas/doer');
    if (!response.ok) throw new Error('Failed to fetch');
    
    const data = await response.json();
    const starCount = data.stargazers_count;
    
    // Update button text to include star count
    const svgElement = starButton.querySelector('svg');
    starButton.innerHTML = '';
    starButton.appendChild(svgElement);
    starButton.appendChild(document.createTextNode(`Star on GitHub · ${starCount}`));
  } catch (error) {
    // Gracefully handle errors - just keep the original text without count
    console.log('Could not fetch star count:', error);
  }
}

// Update star count on page load
updateStarCount();
