import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const HomepageCarousel = ({ interval = 2000 }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:3000/banners');
        if (!response.ok) {
          throw new Error('Failed to fetch banners');
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="mt-5">
      {images.length > 0 && (
        <Carousel fade interval={interval} className="carousel-fade">
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={`http://localhost:3000/${image.foto}`}
                alt={`Slide ${index}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default HomepageCarousel;
