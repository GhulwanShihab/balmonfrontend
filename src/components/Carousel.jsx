import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.png';
import carousel3 from '../assets/carousel3.png';

const MyCarousel = () => {
  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <Carousel>
        <Carousel.Item>
          <img
            src={carousel1}
            alt="First slide"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              maxHeight: '500px', // Default height for desktop
            }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={carousel2}
            alt="Second slide"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              maxHeight: '500px', // Default height for desktop
            }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={carousel3}
            alt="Third slide"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              maxHeight: '500px', // Default height for desktop
            }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
