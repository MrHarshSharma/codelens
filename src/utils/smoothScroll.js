// Smooth scroll utility with header offset
export const smoothScrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  // Get header height based on screen size (matches CSS variables)
  const headerHeight = window.innerWidth <= 768 ? 70 : 80;
  
  // Calculate position with offset
  const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - headerHeight;

  // Smooth scroll with offset
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

// Alternative method using scroll margin (for modern browsers)
export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  // This method relies on the CSS scroll-margin-top property
  section.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
}; 