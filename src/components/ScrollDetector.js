import { useEffect, useState } from 'react';

const ScrollDetector = ({ onServicesSectionReached }) => {
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasTriggered) return;

      const servicesSection = document.getElementById('services');
      if (!servicesSection) return;

      const rect = servicesSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Trigger when services section is 30% visible
      const isVisible = rect.top < windowHeight * 0.7 && rect.bottom > 0;
      
      if (isVisible) {
        // Delay popup by 2 seconds after reaching services section
        setTimeout(() => {
          if (!hasTriggered) {
            onServicesSectionReached();
            setHasTriggered(true);
          }
        }, 2000);
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check immediately in case user is already at services section
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasTriggered, onServicesSectionReached]);

  // This component doesn't render anything
  return null;
};

export default ScrollDetector; 