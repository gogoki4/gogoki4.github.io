// Highlight timeline items when scrolling
const timelineItems = document.querySelectorAll('.timeline-item');

window.addEventListener('scroll', () => {
  const triggerHeight = window.innerHeight / 1.2;

  timelineItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < triggerHeight) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});

// You can add additional interactive features as needed
