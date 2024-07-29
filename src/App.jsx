import React from 'react';
//import Carousel from './components/Carousel.jsx';
import IgCarousel from './components/InstagramCarousel.jsx';
import HomepageCarousel from './components/HomepageCarousel.jsx';
import About from './components/About.jsx';
import PelayananSection from './components/PelayananSection.jsx';
import AduanSection from './components/AduanSection.jsx';
import BeritaTerkini from './components/BeritaTerkini.jsx';

const App = () => {
  return (

    <div>
      <div className="position-relative w-100 mt-0">
        {/* <HomepageCarousel interval={4000} /> */}
        <IgCarousel interval={4000} />
      </div>
      <About />
      <PelayananSection />
      <AduanSection />
      <BeritaTerkini />
    </div>
  );
}

export default App;