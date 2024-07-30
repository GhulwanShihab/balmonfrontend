import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import "./VisiMisi.css";
import visimisi from '../assets/visimisi.png';

const VisiMisi = () => {
  return (
    <Container className="iar-section">
      <div>
        <div className="iar-header mb-4">
          <h1 className="iar-bg-title">TUGAS & FUNGSI</h1>
        </div>
      </div>
      <Row className="align-items-center mb-5">
        <Col md={6} className="text-md-left mb-4 mb-md-0">
          <p className="iar-description text-left"><br />
            <ul className="text-left">
                <li className="text-left">Mewujudkan tatanan spektrum frekuensi radio yang efisien untuk mendorong pembangunan ekonomi berbasis wireless broadband</li>
                <li>Melakukan optimalisasi dan konsolidasi sumber daya satelit nasional, termasuk frekuensi
                    dan slot orbit, mendorong kerjasama dengan industri satelit global dengan
                    memperhatikan kepentingan nasional</li>
                <li>Mewujudkan pelayanan frekuensi dan sertifikasi perangkat yang cepat, tepat dan benar
                    secara profesional dan berintegritas. </li>
                <li>Terkelolanya Penerimaan Negara Bukan Pajak dari izin yang diberikan kepada para
                    pemangku kepentingan di bidang SDPPI.</li>
                <li>Mewujudkan standar perangkat informatika yang mendukung kemandirian teknologi
                    dibidang wireless broadband.</li>
            </ul>
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
      <Row className="align-items-center mb-5">
        <Col md={6} className="order-md-2 text-md-right mb-4 mb-md-0">
          <p className="iar-description text-right"> <br />
            <ul className='text-left'>
                <li>Mewujudkan kepastian hukum di bidang pengelolaan sumber daya dan perangkat
                    informatika. </li>
                <li>Mewujudkan tertib penggunaan spektrum frekuensi radio dan perangkat telekomunikasi
                    secara terpadu</li>
                <li>Mengembangkan sistem stasiun monitoring frekuensi dan sistem monitoring perangkat
                    yang terintegrasi secara nasional.</li>
                <li>Mewujudkan peningkatan kualitas layanan pengujian dan kalibrasi perangkat informatika
                    yang profesional, berintegritas dan diakui dunia internasional. </li>
                <li>Mewujudkan dukungan teknis dan administrative yang mendukung pelaksanaan
                    reformasi birokrasi di lingkungan Ditjen SDPPI </li>
            </ul>
          </p>
        </Col>
        <Col md={6} className="order-md-1 text-center">
          <img
            src={visimisi}
            alt="IKRAP"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default VisiMisi;
