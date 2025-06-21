// Firebase Analytics utility functions
// Uncomment imports when Firebase is installed
// import { logEvent } from 'firebase/analytics';
// import { analytics } from '../firebase';

// Track page views
export const trackPageView = (pageName) => {
  // Uncomment when Firebase is installed
  // logEvent(analytics, 'page_view', {
  //   page_title: pageName,
  //   page_location: window.location.href,
  //   page_path: window.location.pathname
  // });
  console.log(`Page view tracked: ${pageName}`);
};

// Track contact form submissions
export const trackContactFormSubmit = (serviceType) => {
  // Uncomment when Firebase is installed
  // logEvent(analytics, 'contact_form_submit', {
  //   service_type: serviceType,
  //   form_name: 'contact_form'
  // });
  console.log(`Contact form submitted for: ${serviceType}`);
};

// Track service interest
export const trackServiceInterest = (serviceName) => {
  // Uncomment when Firebase is installed
  // logEvent(analytics, 'service_interest', {
  //   service_name: serviceName,
  //   engagement_type: 'click'
  // });
  console.log(`Service interest tracked: ${serviceName}`);
};

// Track phone number clicks
export const trackPhoneClick = (phoneNumber) => {
  // Uncomment when Firebase is installed
  // logEvent(analytics, 'phone_click', {
  //   phone_number: phoneNumber,
  //   contact_method: 'phone'
  // });
  console.log(`Phone click tracked: ${phoneNumber}`);
};

// Track email clicks
export const trackEmailClick = (emailAddress) => {
  // Uncomment when Firebase is installed
  // logEvent(analytics, 'email_click', {
  //   email_address: emailAddress,
  //   contact_method: 'email'
  // });
  console.log(`Email click tracked: ${emailAddress}`);
};

// Track button clicks
export const trackButtonClick = (buttonName, buttonLocation) => {
  // Uncomment when Firebase is installed
  // logEvent(analytics, 'button_click', {
  //   button_name: buttonName,
  //   button_location: buttonLocation
  // });
  console.log(`Button click tracked: ${buttonName} at ${buttonLocation}`);
};

// Track navigation clicks
export const trackNavigation = (sectionName, navigationMethod = 'menu') => {
  // Uncomment when Firebase is installed
  // logEvent(analytics, 'navigation_click', {
  //   section_name: sectionName,
  //   navigation_method: navigationMethod,
  //   page_location: window.location.href
  // });
  console.log(`Navigation tracked: ${sectionName} via ${navigationMethod}`);
};

// Track CTA button clicks (Call-to-Action)
export const trackCTAClick = (ctaText, ctaLocation, targetSection = '') => {
  // Uncomment when Firebase is installed
  // logEvent(analytics, 'cta_click', {
  //   cta_text: ctaText,
  //   cta_location: ctaLocation,
  //   target_section: targetSection
  // });
  console.log(`CTA clicked: "${ctaText}" from ${ctaLocation}`);
};

// Track scroll depth
export const trackScrollDepth = (depth, maxDepth) => {
  // Uncomment when Firebase is installed
  // logEvent(analytics, 'scroll_depth', {
  //   scroll_depth: depth,
  //   max_scroll_depth: maxDepth,
  //   page_path: window.location.pathname
  // });
  console.log(`Scroll depth: ${depth}% (max: ${maxDepth}%)`);
};

// Track section views (when user scrolls to a section)
export const trackSectionView = (sectionName, timeSpent = 0) => {
  // Uncomment when Firebase is installed
  // logEvent(analytics, 'section_view', {
  //   section_name: sectionName,
  //   time_spent: timeSpent,
  //   page_path: window.location.pathname
  // });
  console.log(`Section viewed: ${sectionName} (${timeSpent}s)`);
};

// Track form interactions (field focus/blur)
export const trackFormInteraction = (fieldName, action, formName = 'contact_form') => {
  // Uncomment when Firebase is installed
  // logEvent(analytics, 'form_interaction', {
  //   field_name: fieldName,
  //   action: action, // 'focus', 'blur', 'input'
  //   form_name: formName
  // });
  console.log(`Form interaction: ${action} on ${fieldName} in ${formName}`);
};

// Track social media clicks
export const trackSocialClick = (platform, location = 'footer') => {
  // Uncomment when Firebase is installed
  // logEvent(analytics, 'social_click', {
  //   social_platform: platform,
  //   click_location: location
  // });
  console.log(`Social media click: ${platform} from ${location}`);
};

// Track external link clicks
export const trackExternalLink = (url, linkText, location) => {
  // Uncomment when Firebase is installed
  // logEvent(analytics, 'external_link_click', {
  //   external_url: url,
  //   link_text: linkText,
  //   click_location: location
  // });
  console.log(`External link clicked: ${url} (${linkText}) from ${location}`);
};

// Track file downloads (if you add portfolio downloads)
export const trackFileDownload = (fileName, fileType, downloadLocation) => {
  // Uncomment when Firebase is installed
  // logEvent(analytics, 'file_download', {
  //   file_name: fileName,
  //   file_type: fileType,
  //   download_location: downloadLocation
  // });
  console.log(`File downloaded: ${fileName} (${fileType}) from ${downloadLocation}`);
};

// Track search actions (if you add search functionality)
export const trackSearch = (searchTerm, searchLocation = 'main_search') => {
  // Uncomment when Firebase is installed
  // logEvent(analytics, 'search', {
  //   search_term: searchTerm,
  //   search_location: searchLocation
  // });
  console.log(`Search performed: "${searchTerm}" from ${searchLocation}`);
};

// Track user engagement time
export const trackEngagementTime = (sectionName, engagementTime) => {
  // Uncomment when Firebase is installed
  // logEvent(analytics, 'user_engagement', {
  //   engagement_time_msec: engagementTime,
  //   section_name: sectionName
  // });
  console.log(`User engagement: ${engagementTime}ms in ${sectionName}`);
};

// Track mobile menu usage
export const trackMobileMenu = (action) => {
  // Uncomment when Firebase is installed
  // logEvent(analytics, 'mobile_menu', {
  //   menu_action: action, // 'open', 'close', 'navigate'
  //   device_type: 'mobile'
  // });
  console.log(`Mobile menu: ${action}`);
};

// Track error events
export const trackError = (errorType, errorMessage, errorLocation) => {
  // Uncomment when Firebase is installed
  // logEvent(analytics, 'error_event', {
  //   error_type: errorType,
  //   error_message: errorMessage,
  //   error_location: errorLocation
  // });
  console.log(`Error tracked: ${errorType} - ${errorMessage} at ${errorLocation}`);
}; 