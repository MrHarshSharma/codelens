// Flip Book Page Animation
class FlipBookScrollEffect {
  constructor() {
    this.sections = [];
    this.currentPage = 0;
    this.isAnimating = false;
    this.scrollTimeout = null;
    this.lastScrollY = 0;
    this.scrollDirection = 'down';
    this.scrollThreshold = 100; // Minimum scroll distance to trigger flip
    this.animationDuration = 800; // Match CSS animation duration
    
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    // Get all sections that should have flip book effect
    const sectionSelectors = [
      '#home',  // Updated to match Hero section
      '#about', 
      '#services',
      '#contact'
    ];

    this.sections = sectionSelectors.map((selector, index) => {
      const element = document.querySelector(selector);
      if (element) {
        // Add flipbook-page class and required elements
        element.classList.add('flipbook-page');
        
        // Add spine element
        const spine = document.createElement('div');
        spine.className = 'flipbook-spine';
        element.appendChild(spine);
        
        // Add corner curl element
        const corner = document.createElement('div');
        corner.className = 'flipbook-corner';
        element.appendChild(corner);
        
        return {
          element,
          id: selector,
          index,
          offsetTop: element.offsetTop,
          height: element.offsetHeight,
          centerY: element.offsetTop + (element.offsetHeight / 2)
        };
      }
      return null;
    }).filter(Boolean);

    // Set initial state - first page is active
    if (this.sections.length > 0) {
      this.sections[0].element.classList.add('active');
    }

    // Bind scroll events
    this.bindScrollEvents();
    
    // Initial check
    setTimeout(() => this.handleScroll(), 100);
  }

  bindScrollEvents() {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking && !this.isAnimating) {
        requestAnimationFrame(() => {
          this.handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Detect scroll direction and distance
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - this.lastScrollY);
      
      this.scrollDirection = currentScrollY > this.lastScrollY ? 'down' : 'up';
      
      // Only process if significant scroll movement
      if (scrollDelta > 5) {
        this.lastScrollY = currentScrollY;
      }
    }, { passive: true });
  }

  handleScroll() {
    if (this.isAnimating) return;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const viewportCenter = scrollY + (windowHeight / 2);

    // Find which page should be active based on viewport center
    let targetPageIndex = 0;
    let minDistance = Infinity;

    this.sections.forEach((section, index) => {
      const distance = Math.abs(viewportCenter - section.centerY);
      if (distance < minDistance) {
        minDistance = distance;
        targetPageIndex = index;
      }
    });

    // Check if we need to flip to a different page
    if (targetPageIndex !== this.currentPage) {
      this.flipToPage(targetPageIndex);
    } else {
      // Update current page state
      this.updatePageStates();
    }
  }

  flipToPage(targetIndex) {
    if (this.isAnimating || targetIndex === this.currentPage) return;

    this.isAnimating = true;
    const direction = targetIndex > this.currentPage ? 'forward' : 'backward';
    
    // Remove all states first
    this.sections.forEach(section => {
      section.element.classList.remove('active', 'flipping-forward', 'flipping-backward');
    });

    // Animate current page flipping away
    if (this.sections[this.currentPage]) {
      const currentPageClass = direction === 'forward' ? 'flipping-forward' : 'flipping-backward';
      this.sections[this.currentPage].element.classList.add(currentPageClass);
    }

    // Animate target page flipping in
    setTimeout(() => {
      if (this.sections[targetIndex]) {
        this.sections[targetIndex].element.classList.remove('flipping-forward', 'flipping-backward');
        this.sections[targetIndex].element.classList.add('active');
      }
      
      this.currentPage = targetIndex;
      
      // End animation state
      setTimeout(() => {
        this.isAnimating = false;
        this.updatePageStates();
      }, this.animationDuration / 2);
      
    }, this.animationDuration / 4);
  }

  updatePageStates() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    this.sections.forEach((section, index) => {
      const rect = section.element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const elementCenter = elementTop + (rect.height / 2);

      // Remove animation classes if not animating
      if (!this.isAnimating) {
        section.element.classList.remove('flipping-forward', 'flipping-backward');
      }

      // Set active state based on viewport position
      if (elementCenter >= -windowHeight * 0.2 && elementCenter <= windowHeight * 1.2) {
        if (index === this.currentPage) {
          section.element.classList.add('active');
        }
      }

      // Add subtle preview effects for adjacent pages
      if (Math.abs(index - this.currentPage) === 1 && !this.isAnimating) {
        const isNext = index > this.currentPage;
        const previewClass = isNext ? 'flipping-forward' : 'flipping-backward';
        
        // Only add preview if page is partially visible
        if (elementTop < windowHeight && elementBottom > 0) {
          const visibilityRatio = Math.max(0, Math.min(1, 
            (windowHeight - Math.max(0, elementTop)) / Math.min(windowHeight, rect.height)
          ));
          
          if (visibilityRatio > 0.1) {
            section.element.style.transform = isNext 
              ? `rotateX(-${visibilityRatio * 5}deg) translateZ(${visibilityRatio * 20}px)`
              : `rotateX(${visibilityRatio * 5}deg) translateZ(${visibilityRatio * 20}px)`;
          }
        }
      }
    });
  }

  // Method to programmatically flip to specific page
  goToPage(pageIndex) {
    if (pageIndex >= 0 && pageIndex < this.sections.length) {
      this.flipToPage(pageIndex);
      
      // Scroll to page center
      const targetSection = this.sections[pageIndex];
      if (targetSection) {
        const scrollTo = targetSection.centerY - (window.innerHeight / 2);
        window.scrollTo({
          top: scrollTo,
          behavior: 'smooth'
        });
      }
    }
  }

  // Method to flip to next page
  nextPage() {
    if (this.currentPage < this.sections.length - 1) {
      this.goToPage(this.currentPage + 1);
    }
  }

  // Method to flip to previous page
  previousPage() {
    if (this.currentPage > 0) {
      this.goToPage(this.currentPage - 1);
    }
  }

  // Method to refresh section positions
  refresh() {
    this.sections.forEach(section => {
      if (section && section.element) {
        section.offsetTop = section.element.offsetTop;
        section.height = section.element.offsetHeight;
        section.centerY = section.offsetTop + (section.height / 2);
      }
    });
  }

  // Method to disable flip book effect
  disable() {
    this.sections.forEach(section => {
      if (section && section.element) {
        section.element.classList.remove(
          'flipbook-page', 'active', 'flipping-forward', 'flipping-backward'
        );
        section.element.style.transform = '';
        
        // Remove added elements
        const spine = section.element.querySelector('.flipbook-spine');
        const corner = section.element.querySelector('.flipbook-corner');
        if (spine) spine.remove();
        if (corner) corner.remove();
      }
    });
  }

  // Method to enable flip book effect
  enable() {
    this.setup();
  }

  // Get current page info
  getCurrentPage() {
    return {
      index: this.currentPage,
      section: this.sections[this.currentPage],
      total: this.sections.length
    };
  }
}

// Initialize flip book effect
let flipBookEffect = null;

export const initPageTurning = () => {
  if (!flipBookEffect) {
    flipBookEffect = new FlipBookScrollEffect();
  }
  return flipBookEffect;
};

export const refreshPageTurning = () => {
  if (flipBookEffect) {
    flipBookEffect.refresh();
  }
};

export const disablePageTurning = () => {
  if (flipBookEffect) {
    flipBookEffect.disable();
  }
};

export const enablePageTurning = () => {
  if (flipBookEffect) {
    flipBookEffect.enable();
  } else {
    initPageTurning();
  }
};

// Additional utility functions for programmatic control
export const goToPage = (pageIndex) => {
  if (flipBookEffect) {
    flipBookEffect.goToPage(pageIndex);
  }
};

export const nextPage = () => {
  if (flipBookEffect) {
    flipBookEffect.nextPage();
  }
};

export const previousPage = () => {
  if (flipBookEffect) {
    flipBookEffect.previousPage();
  }
};

export const getCurrentPage = () => {
  if (flipBookEffect) {
    return flipBookEffect.getCurrentPage();
  }
  return null;
};

export default FlipBookScrollEffect; 