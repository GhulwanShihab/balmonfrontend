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
          <p className="iar-description text-left">Direktorat Jenderal Sumber Daya dan Perangkat Pos dan Informatika mempunyai tugas menyelenggarakan perumusan dan pelaksanaan kebijakan di bidang pengelolaan spektrum frekuensi radio dan orbit satelit serta standardisasi perangkat pos dan informatika. Dalam melaksanakan tugas sebagaimana dimaksud, Direktorat Jenderal Sumber Daya dan Perangkat Pos dan Informatika menyelenggarakan fungsi: <br />
            <ul className="text-left">
                <li className="text-left">Perumusan kebijakan di bidang penataan, perizinan, monitoring dan evaluasi, serta penegakan hukum penggunaan spektrum frekuensi radio dan orbit satelit, serta standardisasi perangkat pos dan informatika;</li>
                <li>Pelaksanaan kebijakan di bidang penataan, perizinan, monitoring dan evaluasi, serta penegakan hukum penggunaan spektrum frekuensi radio dan orbit satelit, serta standardisasi perangkat pos dan informatika;</li>
                <li>Penyusunan norma, standar, prosedur, dan kriteria di bidang pengawasan standardisasi perangkat telekomunikasi;</li>
                <li>Pelaksanaan pemberian bimbingan teknis dan supervisi di bidang pengawasan standardisasi perangkat telekomunikasi;</li>
                <li>Pelaksanaan evaluasi dan pelaporan di bidang penataan, perizinan, monitoring dan evaluasi, serta penegakan hukum penggunaan spektrum frekuensi radio dan orbit satelit, serta standardisasi perangkat pos dan informatika; pelaksanaan administrasi Direktorat Jenderal Sumber Daya dan Perangkat Pos dan Informatika.</li>
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
          <p className="iar-description text-right">Direktorat Jenderal Sumber Daya dan Perangkat Pos dan Informatika mempunyai tugas menyelenggarakan perumusan dan pelaksanaan kebijakan di bidang pengelolaan spektrum frekuensi radio dan orbit satelit serta standardisasi perangkat pos dan informatika.Dalam melaksanakan tugas sebagaimana dimaksud, Direktorat Jenderal Sumber Daya dan Perangkat Pos dan Informatika menyelenggarakan fungsi: <br />
            <ul className='text-left'>
                <li>Perumusan kebijakan di bidang penataan, perizinan, monitoring dan evaluasi, serta penegakan hukum penggunaan spektrum frekuensi radio dan orbit satelit, serta standardisasi perangkat pos dan informatika;</li>
                <li>Pelaksanaan kebijakan di bidang penataan, perizinan, monitoring dan evaluasi, serta penegakan hukum penggunaan spektrum frekuensi radio dan orbit satelit, serta standardisasi perangkat pos dan informatika;</li>
                <li>Penyusunan norma, standar, prosedur, dan kriteria di bidang pengawasan standardisasi perangkat telekomunikasi;</li>
                <li>Pelaksanaan pemberian bimbingan teknis dan supervisi di bidang pengawasan standardisasi perangkat telekomunikasi;</li>
                <li>Pelaksanaan evaluasi dan pelaporan di bidang penataan, perizinan, monitoring dan evaluasi, serta penegakan hukum penggunaan spektrum frekuensi radio dan orbit satelit, serta standardisasi perangkat pos dan informatika; pelaksanaan administrasi Direktorat Jenderal Sumber Daya dan Perangkat Pos dan Informatika.</li>
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
