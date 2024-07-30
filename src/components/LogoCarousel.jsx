import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LogoCarousel.css';
import laporimg from '../assets/lapor.jpg';
import psre from '../assets/psre.png';
import pusdiklat from '../assets/pusdiklat.png';

const LogoCarousel = () => {
  const carouselItems = [
    { image: laporimg, link: 'https://example.com/1' },
    { image: psre, link: 'https://example.com/2' },
    { image: pusdiklat, link: 'https://example.com/3' },
    // Tambahkan item sesuai kebutuhan
  ];

  return (
    <Carousel interval={2000} indicators={false} controls={true} fade={false} variant="dark">
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img
              className="d-block w-100"
              src={item.image}
              alt={`Slide ${index + 1}`}
              style={{ objectFit: 'contain', height: '150px' }}
            />
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default LogoCarousel;
