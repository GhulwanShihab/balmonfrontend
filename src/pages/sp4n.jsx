import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const LaporSp4n = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1 className="text-primary">Lapor SP4N</h1>
          <p>Platform untuk pengaduan masyarakat mengenai pelayanan publik.</p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h2 className="text-secondary">Panduan Pelaporan</h2>
          <p>Ikuti langkah-langkah untuk melaporkan masalah Anda melalui platform ini.</p>
          <Button variant="primary" size="lg">Kirim Pengaduan</Button>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="offset-md-4">
          <img src="path/to/image.jpg" alt="Ilustrasi Lapor SP4N" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default LaporSp4n;
