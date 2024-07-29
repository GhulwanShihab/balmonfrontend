import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const AboutUs = () => {
  const [about, setAbout] = useState('');

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch('http://localhost:3000/about');
        if (!response.ok) {
          throw new Error('Failed to fetch about');
        }
        const data = await response.json();
        console.log(data);
        setAbout(data);
      } catch (error) {
        console.error('Error fetching about:', error);
      }
    };

    fetchAbout();
  }, []);

  return (
    <Container className="my-5">
      <Row>
        <Col md={6} xs={12}>
          <img
            src={`http://localhost:3000/${about.fotoAbout}`}
            alt="Kabalmon"
            className="img-fluid"
            style={{ maxHeight: '580px', objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        </Col>
        <Col md={6} xs={12}>
          <h2 style={{ fontWeight: 'bold', color: 'darkblue', textAlign: 'left' }}>
            {about.title}
          </h2>
          <p style={{ maxWidth: '600px', textAlign: 'justify' }}>
            {about.deskripsi}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
