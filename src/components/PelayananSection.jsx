import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaRegStar } from "react-icons/fa";
import backgroundImg from '../assets/service-bg.png';

const PelayananSection = () => {
  const pelayananData = [
    { icon: <FaRegStar />, title: "Izin SFR & SOR", link: "/sfrsor" },
    { icon: <FaRegStar />, title: "Izin Amatir Radio & IKRAP", link: "/iar" },
    { icon: <FaRegStar />, title: "Izin Stasiun Radio", link: "/isr" },
    { icon: <FaRegStar />, title: "Perpanjangan Sertifikat REOR", link: "/reor" },
    { icon: <FaRegStar />, title: "Sertifikasi Alat & Perangkat", link: "https://sertifikasi.postel.go.id/" },
    { icon: <FaRegStar />, title: "Simulasi BPH Frekuensi", link: "https://www.postel.go.id/sdppi_maps/10-20200601-sdppi-maps-simulasi-bhp.php" }
  ];

  // Inline styles
 
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

  const iconStyle = {
    fontSize: '50px',
    marginBottom: '20px'
  };

  return (
    <div style={sectionStyle}>
      <Container className="text-center">
        <Row className="mb-4">
          <Col>
            <h2 style={titleStyle}>Layanan Frekuensi Radio</h2>
            <p>Balai Monitor Spektrum Frekuensi Radio Kelas II Lampung</p>
          </Col>
        </Row>
        <Row>
          {pelayananData.map((pelayanan, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Body className="text-center">
                  <div style={iconStyle}>{pelayanan.icon}</div>
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
