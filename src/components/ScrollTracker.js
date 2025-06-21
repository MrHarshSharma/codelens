import { useEffect, useRef } from 'react';
import { trackScrollDepth, trackSectionView } from '../utils/analytics';

const ScrollTracker = () => {
  const scrollDepthRef = useRef(0);
  const sectionTimers = useRef({});
  const sectionObserver = useRef(null);

  useEffect(() => {
    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = Math.round((scrollTop / scrollHeight) * 100);

      // Track every 25% milestone
      if (scrollPercent > scrollDepthRef.current && scrollPercent % 25 === 0) {
        trackScrollDepth(scrollPercent, scrollDepthRef.current);
        scrollDepthRef.current = scrollPercent;
      }
    };

    // Track section views using Intersection Observer
    const setupSectionObserver = () => {
      const sections = document.querySelectorAll('section[id], .hero');
      
      sectionObserver.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const sectionName = entry.target.id || 'hero';
            
            if (entry.isIntersecting) {
              // Start timer for this section
              sectionTimers.current[sectionName] = Date.now();
            } else {
              // Calculate time spent if timer exists
              if (sectionTimers.current[sectionName]) {
                const timeSpent = Math.round((Date.now() - sectionTimers.current[sectionName]) / 1000);
                if (timeSpent > 2) { // Only track if viewed for more than 2 seconds
                  trackSectionView(sectionName, timeSpent);
                }
                delete sectionTimers.current[sectionName];
              }
            }
          });
        },
        {
          threshold: 0.3, // Trigger when 30% of section is visible
          rootMargin: '-50px 0px' // Account for header
        }
      );

      sections.forEach((section) => {
        sectionObserver.current.observe(section);
      });
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Setup intersection observer after a short delay to ensure DOM is ready
    setTimeout(setupSectionObserver, 1000);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionObserver.current) {
        sectionObserver.current.disconnect();
      }
      
      // Track remaining section times on unmount
      Object.entries(sectionTimers.current).forEach(([sectionName, startTime]) => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        if (timeSpent > 2) {
          trackSectionView(sectionName, timeSpent);
        }
      });
    };
  }, []);

  // This component doesn't render anything
  return null;
};

export default ScrollTracker; 