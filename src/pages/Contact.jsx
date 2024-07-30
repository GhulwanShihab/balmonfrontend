import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';
import potraitImage from '../assets/contact.png'; // Pastikan mengganti 'your-image.jpg' dengan nama file gambar yang Anda gunakan

const Contact = () => {
  return (
    <>
      <Container className="contact-container">
        <Row>
          <div>
            <div className="iar-header mb-4">
              <h1 className="iar-bg-title">KONTAK</h1>
            </div>
          </div>
        </Row>
        <Row className="mt-5">
          <Col md={6} className="contact-image">
            <img src={potraitImage} alt="Contact" className="img-fluid" />
          </Col>
          <Col md={6} className="contact-info">
            <h2><strong>INFORMASI KONTAK</strong></h2>
            <p><strong>Alamat :</strong> Jl. Kramat Jaya KM. 14 No.9 RT 004/002, Desa Hajimena, Kec. Natar, Kab. Lampung Selatan, Lampung 35362</p>
            <p><strong>Email :</strong> balmonsaranadanpelayanan@gmail.com</p>
            <p><strong>Telepon/WhatsApp :</strong> 0852 6666 6910</p>
            <h2><strong>LOKASI</strong></h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.3898460387272!2d105.2139320760099!3d-5.357337094621426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40cff77ffa9fed%3A0x3c61fa95e2bec86b!2sBalai%20Monitor%20Spektrum%20Frekuensi%20Radio%20Kelas%20II%20Lampung!5e0!3m2!1sen!2sid!4v1721032151058!5m2!1sen!2sid"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
