import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './wbs.css'; // File CSS terpisah untuk tambahan styling
import exampleImage from '../assets/modi.jpg'; // Ganti dengan path gambar yang sesuai

const WBS = () => {
  return (
    <Container className="wbs-section text-center mt-5">
      <div className="wbs-header mb-4">
        <h1 className="wbs-title mb-3">WBS (Whistleblowing System)</h1>
      </div>
      <div className="wbs-content">
        <h1 className="wbs-subtitle mb-4 text-primary">Pelaporan Pelanggaran</h1>
        <Button className="wbs-button btn-lg mb-4">Lapor Pelanggaran &gt;</Button>
        <div className="wbs-image-container d-flex justify-content-center">
          <img src={exampleImage} alt="WBS" className="wbs-image img-fluid rounded shadow"/>
        </div>
      </div>
    </Container>
  );
};

export default WBS;
