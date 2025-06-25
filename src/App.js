import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTracker from './components/ScrollTracker';
import BookingPopup from './components/BookingPopup';
import ScrollDetector from './components/ScrollDetector';

// Firebase Analytics (uncomment when Firebase is installed)
import { analytics } from './firebase';

function App() {
  const [showBookingPopup, setShowBookingPopup] = useState(false);

  useEffect(() => {
    // Initialize Firebase Analytics when component mounts
    // This will automatically track page views
    // Uncomment when Firebase is installed and configured
    console.log('Firebase Analytics initialized:', analytics);
  }, []);

  const handleServicesSectionReached = () => {
    setShowBookingPopup(true);
  };

  const handleCloseBookingPopup = () => {
    setShowBookingPopup(false);
  };

  return (
    <div className="App">
      <ScrollTracker />
      <ScrollDetector onServicesSectionReached={handleServicesSectionReached} />
      
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      
      <BookingPopup 
        isVisible={showBookingPopup} 
        onClose={handleCloseBookingPopup} 
      />
    </div>
  );
}

export default App;
