import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import "./VisiMisi.css";
import visimisi from '../assets/visimisi.png';

const VisiMisi = () => {
  return (
    <Container className="iar-section">
      <div>
        <div className="iar-header mb-4">
          <h1 className="iar-bg-title">VISI & MISI</h1>
        </div>
      </div>
      <Row className="align-items-center mb-5">
        <Col md={6} className="text-md-left mb-4 mb-md-0">
          <h2 className="iar-title text-left">VISI</h2>
          <p className="iar-description text-left">Terwujudnya Indonesia Maju yang Berdaulat, Mandiri, dan Berkepribadian Berlandaskan Gotong Royong </p>
          <h2 className="iar-title text-left">MISI</h2>
          <p className="iar-description text-left">
            <ol className="text-left">
                <li className="text-left">Peningkatan Kualitas Manusia Indonesia </li>
                <li>Struktur Ekonomi yang Produktif, Mandiri, dan Berdaya Saing</li>
                <li>Pembangunan yang Merata dan Berkeadilan</li>
                <li>Mencapai Lingkungan Hidup yang Berkelanjutan</li>
                <li>Kemajuan Budaya yang Mencerminkan Kepribadian Bangsa</li>
                <li>Penegakan Sistem Hukum yang Bebas Korupsi, Bermartabat, dan Terpercaya</li>
                <li>Perlindungan bagi Segenap Bangsa dan Memberikan Rasa Aman pada Seluruh Warga </li>
                <li>Pengelolaan Pemerintahan yang Bersih, Efektif, dan Terpercaya</li>
                <li>Sinergi Pemerintah Daerah dalam Kerangka Negara Kesatuan</li>
            </ol>
          </p>
        </Col>
        <Col md={6} className="text-center">
          <img
            src={visimisi}
            alt="IAR"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default VisiMisi;