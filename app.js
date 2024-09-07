// Select the element you want to animate
const animatedElement = document.querySelector('.footer_social_media');

// Create an Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the animation class when the element is in view
      animatedElement.classList.add('animate__backInLeft');
      observer.unobserve(animatedElement); // Stop observing after animation is added
    }
  });
}, {
  threshold: 0.1 // Trigger when 10% of the element is visible
});

// Start observing the element
observer.observe(animatedElement);