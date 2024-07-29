// src/pages/Home.jsx
import React from 'react';
import Carousel from '../components/Carousel';
import About from '../components/About';
import PelayananSection from '../components/PelayananSection';
import BeritaTerkini from '../components/BeritaTerkini';
import AduanSection from '../components/AduanSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <PelayananSection />
      <AduanSection />
      <BeritaTerkini />
      <Footer />
    </>
  );
};

export default Home;
