import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import ContentStyles from '../components/ContentStyles';
import Services from '../components/Services';
import WhyMe from '../components/WhyMe';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFBF7] via-[#FFF5F0] to-[#FFFBF7]">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <ContentStyles />
      <Services />
      <WhyMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;