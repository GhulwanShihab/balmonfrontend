import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaRegStar } from "react-icons/fa";
import aduanimg from '../assets/aduan.png';

const AduanSection = () => {
  const aduanData = [
    { icon: <FaRegStar />, title: "Lapor Gangguan Frekuensi", link: "#" },
    { icon: <FaRegStar />, title: "Whistle Blower System (WBS)", link: "#" },
    { icon: <FaRegStar />, title: "SP4N Lapor", link: "#" },
  ];

  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '2rem 0' }}>
      <Container className="my-5">
        <Row className="mb-4">
          <Col md={6} xs={12} className="text-md-start">
            <h2 style={{ fontWeight: 'bold', color: 'darkblue', marginBottom: '1rem' }}>
              Layanan Aduan Masyarakat
            </h2>
            <p style={{ color: 'black', marginBottom: '2rem' }}>
              Bantu Kami Untuk Mewujudkan Zona Integritas menuju Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi dan Bersih Melayani (WBBM) di wilayah Balai Monitoring Spektrum Frekuensi Radio Kelas II Lampung
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={12}>
            {aduanData.map((aduan, index) => (
              <Card className="mb-4" style={{ textAlign: 'left' }} key={index}>
                <Card.Body>
                  <div style={{ fontSize: '2rem' }}>{aduan.icon}</div>
                  <Card.Title style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                    {aduan.title}
                  </Card.Title>
                  <Button variant="primary" href={aduan.link}>Klik Disini</Button>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col md={6} xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
            <img
              src={aduanimg}
              alt="Aduan"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AduanSection;
