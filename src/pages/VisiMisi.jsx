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
          <p className="iar-description text-left">Terwujudnya penggunaan spektrum frekuensi radio yang tertib, efisien dan bebas dari segala interferensi yang merugikan, melalui implementasi sistem pengendalian dan pengawasan yang profesional sesuai dengan teknologi komunikasi</p>
          <h2 className="iar-title text-left">MISI</h2>
          <p className="iar-description text-left">
            <ul className="text-left">
                <li className="text-left">Mendukung dan meningkatkan pelayanan publik berbasis online (transformasi digital)</li>
                <li>Meningkatkan kualitas pengawasan dan pengendalian penggunaan spektrum frekuensi radio</li>
                <li>Meningkatkan kualitas, kompetensi, dan kredibilitas sumber daya manusia di Balai Monitor Spektrum Frekuensi Radio kelas i Semarang</li>
                <li>Mendukung pembangunan zona integritas menuju Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi Bersih Melayani (WBBM) melalui reformasi birokrasi khususnya pencegahan korupsi dan peningkatan pelayanan publik.</li>
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
    </Container>
  );
}

export default VisiMisi;
