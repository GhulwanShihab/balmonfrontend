import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './sp4n.css'; // Pastikan untuk menambahkan CSS yang sesuai
import laporlogo from '../assets/logo-lapor.png';

const LaporSp4n = () => {
  return (
    <Container>
      <div>
        <div className="isr-header mb-4">
          <h1 className="isr-bg-title">SP4N LAPOR!</h1>
        </div>
      </div>
      <Row className="my-4">
      
        <Col md={6}>
          <div className="text-left">
            <img src={laporlogo} alt="Panduan Pelaporan" className="img-fluid small-landscape-photo" />
            <p>Sistem Pengelolaan Pengaduan Pelayanan Publik Nasional (SP4N) – Layanan Aspirasi dan Pengaduan Online Rakyat (LAPOR!)</p>
            <Button variant="primary" size="lg" className="me-2" href='https://kominfo.lapor.go.id/'>Lapor Kominfo</Button>
            <Button variant="secondary" size="lg">Lapor!</Button>
          </div>
        </Col>
        <Col md={6} className="text-left">
          <h1 className="text-primary">Layanan Aspirasi dan Pengaduan Online Rakyat (LAPOR!)</h1>
          <p>layanan penyampaian semua aspirasi dan pengaduan masyarakat yang terintegrasi secara Nasional dengan laman akses website www.lapor.go.id <br />
LAPOR! telah ditetapkan sebagai Sistem Pengelolaan Pengaduan Pelayanan Publik Nasional (SP4N) berdasarkan Peraturan Presiden Nomor 76 Tahun 2013 dan Peraturan Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Nomor 3 Tahun 2015. <br />
SP4N LAPOR! dibentuk untuk merealisasikan kebijakan “no wrong door policy” yang menjamin hak masyarakat agar pengaduan dari manapun dan jenis apapun akan disalurkan kepada penyelenggara pelayanan publik yang berwenang menanganinya.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default LaporSp4n;
