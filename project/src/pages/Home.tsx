import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Courses from '../components/sections/Courses';
import SuccessStories from '../components/sections/SuccessStories';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <SuccessStories />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;