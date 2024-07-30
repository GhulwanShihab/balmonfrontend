import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// Import your images here
import sfrSorImage from '../assets/sfrlogo.png';
import iarImage from '../assets/iarlogo.png';
import isrImage from '../assets/ISR Maritim.png';
import reorImage from '../assets/perpanjanganlogo.png';
import sertifikasiImage from '../assets/sertifikasilogo.png';
import simulasiImage from '../assets/perpanjanganlogo.png';
import backgroundImg from '../assets/background.jpg';

const PelayananSection = () => {
  const pelayananData = [
    { image: sfrSorImage, title: "Izin SFR & SOR", link: "/sfrsor" },
    { image: iarImage, title: "Izin Amatir Radio & IKRAP", link: "/iar" },
    { image: isrImage, title: "Izin Stasiun Radio", link: "/isr" },
    { image: reorImage, title: "Perpanjangan Sertifikat REOR", link: "/reor" },
    { image: sertifikasiImage, title: "Sertifikasi Alat & Perangkat", link: "https://sertifikasi.postel.go.id/" },
    { image: simulasiImage, title: "Simulasi BPH Frekuensi", link: "https://www.postel.go.id/sdppi_maps/10-20200601-sdppi-maps-simulasi-bhp.php" }
  ];

  const sectionStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '50px 0',
    color: 'white'
  };

  const titleStyle = {
    fontWeight: 'bold',
    color: 'lightblue',
    marginBottom: '20px'
  };

  const imageStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    border: '3px solid lightblue',
    marginBottom: '20px'
  };

  return (
    <div style={sectionStyle}>
      <Container className="text-center">
        <Row className="mb-4">
          <Col>
            <h2 style={titleStyle}>Layanan Frekuensi Radio</h2>
            <h5>Balai Monitor Spektrum Frekuensi Radio Kelas II Lampung</h5>
          </Col>
        </Row>
        <Row>
          {pelayananData.map((pelayanan, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Body className="text-center">
                  <img src={pelayanan.image} alt={pelayanan.title} style={imageStyle} />
                  <Card.Title>{pelayanan.title}</Card.Title>
                  <Button 
                    variant="primary" 
                    href={pelayanan.link} 
                    target={pelayanan.link.startsWith('http') ? "_blank" : "_self"} 
                    rel={pelayanan.link.startsWith('http') ? "noopener noreferrer" : ""}
                  >
                    Klik Disini
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default PelayananSection;
