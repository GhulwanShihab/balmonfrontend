import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaInstagram, FaYoutube, FaWhatsappSquare } from 'react-icons/fa';
import kabalmon from '../assets/Kabalmon.png';
import kasubag from '../assets/Kasubbag Umum.png';
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
                <p>
                  <a href="https://instagram.com/balmonsfr_lampung" target="_blank" rel="noopener noreferrer" className="text-dark">
                    <FaInstagram className="footer-icon" /> @balmonsfr_lampung
                  </a>
                </p>
                <p>
                  <a href="https://www.youtube.com/channel/UCr1uz5gL0fLLv_sysPknxaA" target="_blank" rel="noopener noreferrer" className="text-dark">
                    <FaYoutube className="footer-icon" /> balmon_lampung
                  </a>
                </p>
                <p>
                  <a href="https://wa.me/6285266666910" target="_blank" rel="noopener noreferrer" className="text-dark">
                    <FaWhatsappSquare className="footer-icon" /> 0852 6666 6910
                  </a>
                </p>
                <p>
                  <a href="mailto:balmonsaranadanpelayanan@gmail.com" className="text-dark">
                    <FaEnvelope className="footer-icon" /> balmonsaranadanpelayanan@gmail.com
                  </a>
                </p>
              </div>
            </Col>
            <Col md={5} className="footer-section text-center d-flex align-items-center">
              <Row className="w-100 justify-content-center">
                <Col xs={6} className="d-flex flex-column align-items-center">
                  <h4 className="footer-title">KEPALA BALAI MONITOR SFR II LAMPUNG<br/></h4>
                  <img src={kabalmon} alt="Kepala" className="footer-team-photo mb-2" />
                </Col>
                <Col xs={6} className="d-flex flex-column align-items-center">
                  <h4 className="footer-title">KASUBBAG <br/> UMUM</h4>
                  <img src={kasubag} alt="Kasubbag" className="footer-team-photo mb-2" />
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
