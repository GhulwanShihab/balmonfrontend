// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaInstagram, FaYoutube, FaFacebook, FaWhatsappSquare } from 'react-icons/fa';
import kabalmon from '../assets/elon.png';
import kasubag from '../assets/elon.png';
import logobalmon from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top py-5">
        <Container>
          <Row>
            <Col md={3} className="footer-section">
              <img src={logobalmon} alt="Logo" className="footer-logo mb-3" />
              <div className="footer-contact mb-3">
                <p><FaMapMarkerAlt className="footer-icon" /> Jl. Kramat Jaya KM. 14 No.9 RT 004/002, Desa Hajimena, Kec. Natar, Kab. Lampung Selatan, Lampung 35362</p>
                <p><FaWhatsapp className="footer-icon" /> 0852 6666 6910</p>
                <p><FaEnvelope className="footer-icon" /> balmonsaranadanpelayanan@gmail.com</p>
              </div>
            </Col>
            <Col md={4} className="footer-section footer-social-icons">
              <h5>Ikuti Kami</h5>
              <div className="footer-social-icons mb-3">
                <p><FaInstagram className="footer-icon" /> @balmonsfr_lampung</p>
                <p><FaYoutube className="footer-icon" /> balmon_lampung</p>
                <p><FaWhatsappSquare className="footer-icon" /> 0852 6666 6910</p>
              </div>
            </Col>
            <Col md={5} className="footer-section text-center">
              <Row>
                <Col>
                  <h4>Kepala</h4>
                  <img src={kabalmon} alt="Kepala" className="footer-team-photo mb-2" />
                </Col>
                <Col>
                  <h4>Ketua</h4>
                  <img src={kasubag} alt="Ketua" className="footer-team-photo mb-2" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom bg-dark text-light text-center py-3">
        <Container>
          <p className="mb-0">&copy; 2024 Balai Monitor Spektrum Frekuensi Kelas II Lampung.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
