// Smooth scrolling for anchor links
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
  });
  
  // Play video on click
  const videoCards = document.querySelectorAll('.video-card');
  
  videoCards.forEach((card) => {
    const overlay = card.querySelector('.video-overlay');
    const video = card.querySelector('img');
    
    overlay.addEventListener('click', () => {
      overlay.style.opacity = '0';
      video.style.opacity = '1';
      video.style.transition = 'opacity 0.3s ease';
    });
  });
  
  
 
  
  