import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import perpanjanganimg from '../assets/perpanjangan.png'

const IAR = () => {
  const [deskripsi, setDeskripsi] = useState('');
  const [ikrapData, setIkrapData] = useState('');
  const [perpanjangan, setPerpanjangan] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeskripsi = async () => {
      try {
        const response = await fetch('http://localhost:3000/deskripsi');
        if (!response.ok) {
          throw new Error('Failed to fetch deskripsi');
        }
        const data = await response.json();
        setDeskripsi(data);
      } catch (error) {
        console.error('Error fetching deskripsi:', error);
      }
    };

    const fetchIkrap = async () => {
      try {
        const response = await fetch('http://localhost:3000/ikrap');
        if (!response.ok) {
          throw new Error('Failed to fetch ikrap');
        }
        const data = await response.json();
        setIkrapData(data);
      } catch (error) {
        console.error('Error fetching ikrap:', error);
      }
    };

    const fetchPerpanjangan = async () => {
      try {
        const response = await fetch('http://localhost:3000/perpanjangan');
        if (!response.ok) {
          throw new Error('Failed to fetch perpanjangan');
        }
        const data = await response.json();
        setPerpanjangan(data);
      } catch (error) {
        console.error('Error fetching perpanjangan:', error);
      }
    };

    const fetchAll = async () => {
      try {
        setLoading(true);
        await Promise.all([fetchDeskripsi(), fetchIkrap(), fetchPerpanjangan()]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  const handleDeskripsiClick = () => {
    if (deskripsi && deskripsi.url) {
      window.location.href = deskripsi.url;
    } else {
      console.error('URL not found in deskripsi');
    }
  };

  const handleIkrapClick = () => {
    if (ikrapData && ikrapData.url) {
      window.location.href = ikrapData.url;
    } else {
      console.error('URL not found in ikrapData');
    }
  };


  return (
    <Container className="iar-section">
      <div>
        <div className="iar-header mb-4">
          <h1 className="iar-bg-title">IZIN AMATIR RADIO & IKRAP</h1>
        </div>
      </div>
      <Row className="align-items-center mb-5">
        <Col md={6} className="text-md-left mb-4 mb-md-0">
          <h2 className="iar-title text-left">{deskripsi.title}</h2>
          <p className="iar-description text-left">{deskripsi.deskripsi}</p>
          <Button className="iar-button" onClick={handleDeskripsiClick}>Lihat Selengkapnya &gt;</Button>
        </Col>
        <Col md={6} className="text-center">
          <img
            src={`http://localhost:3000/${deskripsi.foto}`}
            alt="IAR"
            className="img-fluid"
          />
        </Col>
      </Row>
      <Row className="align-items-center mb-5">
        <Col md={6} className="order-md-2 text-md-right mb-4 mb-md-0">
          <h2 className="iar-title text-right">Izin Komunikasi Radio Antar Penduduk</h2>
          <p className="iar-description text-right">{ikrapData.deskripsi}</p>
          <Button className="iar-button" onClick={handleIkrapClick}>Lihat Selengkapnya &gt;</Button>
        </Col>
        <Col md={6} className="order-md-1 text-center">
          <img
            src={`http://localhost:3000/${ikrapData.foto}`}
            alt="IKRAP"
            className="img-fluid"
          />
        </Col>
      </Row>
      <Row className="text-center mb-5">
        <Col>
          <h2 className="iar-title text-center">Perpanjangan IAR dan IKRAP</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <img
            src={perpanjanganimg}
            alt="Perpanjangan"
            className="img-fluid iar-bottom-image"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default IAR;
