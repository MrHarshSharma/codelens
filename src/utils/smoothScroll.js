// Smooth scroll utility with header offset
export const smoothScrollToSection = (sectionId) => {
  // Special case for home - scroll to top
  if (sectionId === 'home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return;
  }

  const section = document.getElementById(sectionId);
  if (!section) return;

  // Get header height from CSS custom property to match the actual header height
  const headerHeight = window.innerWidth <= 768 ? 70 : 64; // 4.375rem = 70px mobile, 4rem = 64px desktop
  
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
  // Special case for home - scroll to top
  if (sectionId === 'home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return;
  }

  const section = document.getElementById(sectionId);
  if (!section) return;

  // This method relies on the CSS scroll-margin-top property
  section.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
}; 