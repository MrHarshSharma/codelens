import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTracker from './components/ScrollTracker';

// Firebase Analytics (uncomment when Firebase is installed)
import { analytics } from './firebase';

function App() {
  useEffect(() => {
    // Initialize Firebase Analytics when component mounts
    // This will automatically track page views
    // Uncomment when Firebase is installed and configured
    console.log('Firebase Analytics initialized:', analytics);
  }, []);

  return (
    <div className="App">
      <ScrollTracker />
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
