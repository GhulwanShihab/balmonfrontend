import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './wbs.css'; // File CSS terpisah untuk tambahan styling
import exampleImage from '../assets/wbslapor.jpg'; // Ganti dengan path gambar yang sesuai

const WBS = () => {
  return (
    <Container className="wbs-section text-center mt-5">
      <div>
        <div className="isr-header mb-4">
          <h1 className="isr-bg-title">WHISTLEBLOWING SYSTEM (WBS)</h1>
        </div>
      </div>
      <div className="wbs-content">
        <h1 className="wbs-subtitle mb-4 text-primary">Jangan takut melapor! karena identitas data pelapor AMAN.</h1>
        <Button className="wbs-button btn-lg mb-4" href='https://wbs.kominfo.go.id/'>Lapor Pelanggaran &gt;</Button>
        <div className="wbs-image-container d-flex justify-content-center">
          <img src={exampleImage} alt="WBS" className="wbs-image img-fluid rounded shadow"/>
        </div>
      </div>
    </Container>
  );
};

export default WBS;
