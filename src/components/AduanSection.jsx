import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import aduanimg from '../assets/aduan.png';
import gangguanimg from '../assets/iarlogo.png'
import wbsimg from '../assets/wbslogo.png'
import laporimg from '../assets/laporlogo.png'

const AduanSection = () => {
  const aduanData = [
    { image: gangguanimg, title: "Lapor Gangguan Frekuensi", link: "/gangguan-frekuensi" },
    { image: wbsimg, title: "Whistle Blower System (WBS)", link: "/wbs" },
    { image: laporimg, title: "SP4N Lapor", link: "/sp4n" },
  ];

  const imageStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    border: '3px solid lightblue',
    marginBottom: '20px'
  };

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
                <img src={aduan.image} style={imageStyle} />
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
