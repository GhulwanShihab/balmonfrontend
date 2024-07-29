// src/pages/Contact.jsx
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

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
        <Col md={6}>
          <h2>Formulir Kontak</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Masukkan nama Anda" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukkan email Anda" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Pesan</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Masukkan pesan Anda" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Kirim
            </Button>
          </Form>
        </Col>
        <Col md={6} className="contact-info">
          <h2>Informasi Kontak</h2>
          <p><strong>Alamat :</strong> Jl. Kramat Jaya KM. 14 No.9 RT 004/002, Desa Hajimena, Kec. Natar, Kab. Lampung Selatan, Lampung 35362</p>
          <p><strong>Email :</strong> balmonsaranadanpelayanan@gmail.com</p>
          <p><strong>Telepon/WhatsApp :</strong> 0852 6666 6910</p>
          <h2>Lokasi</h2>
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
