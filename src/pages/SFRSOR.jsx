import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Modal, Button } from 'react-bootstrap';
import './SFRSOR.css';

const SFRSOR = () => {
  const [selectedList, setSelectedList] = useState(1);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });
  const [showModal, setShowModal] = useState(false);

  const handleListClick = (index) => {
    setSelectedList(index);
  };

  const handleCardClick = (card) => {
    setModalContent(card);
    setShowModal(true);
  };

  const sectionsData = {
    SFR: [
      {
        title: "PERMOHONAN BARU",
        cards: [
          { title: "Microwave Link, Broadband Wireless Access (BWA), Studio Transmitter Link Televisi", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Persyaratan SFR...</p><ul><li>Fotokopi KTP</li><li>Surat Pengantar</li><li>Formulir Pendaftaran</li></ul>` },
          { title: "Konsesi, Studio Transmitter Link Radio Siaran, Trunking", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Biaya SFR...</p><ul><li>Biaya Pendaftaran: Rp 1.000.000</li><li>Biaya Administrasi: Rp 500.000</li><li>Total: Rp 1.500.000</li></ul>` },
          { title: "Penyiaran", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Biaya SFR...</p><ul><li>Biaya Pendaftaran: Rp 1.000.000</li><li>Biaya Administrasi: Rp 500.000</li><li>Total: Rp 1.500.000</li></ul>` },
          { title: "Maritim (Stasiun Radio Pantai)", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Biaya SFR...</p><ul><li>Biaya Pendaftaran: Rp 1.000.000</li><li>Biaya Administrasi: Rp 500.000</li><li>Total: Rp 1.500.000</li></ul>` },
          { title: "Maritim (Kapal Laut)", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Biaya SFR...</p><ul><li>Biaya Pendaftaran: Rp 1.000.000</li><li>Biaya Administrasi: Rp 500.000</li><li>Total: Rp 1.500.000</li></ul>` },
          { title: "Satelit (Hak Labuh, ISR Stasiun Bumi dan ISR Stasiun Angkasa)", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Biaya SFR...</p><ul><li>Biaya Pendaftaran: Rp 1.000.000</li><li>Biaya Administrasi: Rp 500.000</li><li>Total: Rp 1.500.000</li></ul>` },
          { title: "Penerbangan (Pesawat Udara dan Darat Penerbangan)", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Biaya SFR...</p><ul><li>Biaya Pendaftaran: Rp 1.000.000</li><li>Biaya Administrasi: Rp 500.000</li><li>Total: Rp 1.500.000</li></ul>` },
        ],
      },
      {
        title: "PERUBAHAN DATA",
        cards: [
          { title: "Perubahan Administrasi", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Dokumen SFR...</p><ul><li>Formulir A</li><li>Fotokopi Sertifikat</li><li>Surat Keterangan</li></ul>` },
          { title: "Perubahan Data Tiket", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Dokumen SFR...</p><ul><li>Formulir A</li><li>Fotokopi Sertifikat</li><li>Surat Keterangan</li></ul>` },
        ],
      },
      {
        title: "PENGHENTIAN MASA BERLAKU",
        cards: [
          { title: "Penghentian Masa Laku ISR", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Dokumen SFR...</p><ul><li>Formulir A</li><li>Fotokopi Sertifikat</li><li>Surat Keterangan</li></ul>` },
          { title: "Penghentian Masa Laku ISR Full dan Parsial", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Dokumen SFR...</p><ul><li>Formulir A</li><li>Fotokopi Sertifikat</li><li>Surat Keterangan</li></ul>` },
        ],
      },
    ],
    SOR: [
      {
        title: "PERMOHONAN BARU",
        cards: [
          { title: "Radio Elektronika dan Operator Radio (REOR)", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Persyaratan SOR...</p><ul><li>Fotokopi KTP</li><li>Surat Pengantar</li><li>Formulir Pendaftaran</li></ul>` },
          { title: "Short Range Certificate (SRC)/ Long Range Certificate (LRC)", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Biaya SOR...</p><ul><li>Biaya Pendaftaran: Rp 1.000.000</li><li>Biaya Administrasi: Rp 500.000</li><li>Total: Rp 1.500.000</li></ul>` },
          { title: "Izin Amatir Radio (IAR)", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Biaya SOR...</p><ul><li>Biaya Pendaftaran: Rp 1.000.000</li><li>Biaya Administrasi: Rp 500.000</li><li>Total: Rp 1.500.000</li></ul>` },
          { title: "Izin Komunikasi Radio Antar Penduduk (IKRAP)", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Biaya SOR...</p><ul><li>Biaya Pendaftaran: Rp 1.000.000</li><li>Biaya Administrasi: Rp 500.000</li><li>Total: Rp 1.500.000</li></ul>` },
        ],
      },
      {
        title: "PERPANJANGAN",
        cards: [
          { title: "Radio Elektronika dan Operator Radio (REOR)", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Dokumen SOR...</p><ul><li>Formulir A</li><li>Fotokopi Sertifikat</li><li>Surat Keterangan</li></ul>` },
        ],
      },
      {
        title: "PENERBITAN KEMBALI PEMBARUAN",
        cards: [
          { title: "Radio Elektronika dan Operator Radio (REOR)", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Persyaratan SOR...</p><ul><li>Fotokopi KTP</li><li>Surat Pengantar</li><li>Formulir Pendaftaran</li></ul>` },
          { title: "Short Range Certificate (SRC)/ Long Range Certificate (LRC)", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Biaya SOR...</p><ul><li>Biaya Pendaftaran: Rp 1.000.000</li><li>Biaya Administrasi: Rp 500.000</li><li>Total: Rp 1.500.000</li></ul>` },
          { title: "Izin Amatir Radio (IAR)", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Biaya SOR...</p><ul><li>Biaya Pendaftaran: Rp 1.000.000</li><li>Biaya Administrasi: Rp 500.000</li><li>Total: Rp 1.500.000</li></ul>` },
          { title: "Izin Komunikasi Radio Antar Penduduk (IKRAP)", content: `<h2>Subjudul 1</h2><p>Deskripsi lengkap untuk Biaya SOR...</p><ul><li>Biaya Pendaftaran: Rp 1.000.000</li><li>Biaya Administrasi: Rp 500.000</li><li>Total: Rp 1.500.000</li></ul>` },
        ],
      },
    ],
  };

  return (
    <Container>
      <div className="sfrsor-header mb-4">
        <h1 className="sfrsor-title">Layanan SFR dan SOR</h1>
      </div>
      <Row>
        <Col>
          <ListGroup horizontal className="justify-content-center">
            <ListGroup.Item action active={selectedList === 1} onClick={() => handleListClick(1)}>
              Spektrum Frekuensi Radio (SFR)
            </ListGroup.Item>
            <ListGroup.Item action active={selectedList === 2} onClick={() => handleListClick(2)}>
              Sertifikasi Operator Radio (SOR)
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          {(selectedList === 1 ? sectionsData.SFR : sectionsData.SOR).map((section, index) => (
            <div key={index}>
              <h2 className="justify-content-center">{section.title}</h2>
              <Row className="justify-content-center">
                {section.cards.map((card, cardIndex) => (
                  <Col md={4} sm={6} xs={12} key={cardIndex} className="mb-4">
                    <Card className="sfrsor-info-card" onClick={() => handleCardClick(card)}>
                      <Card.Body>
                        <Card.Title className="sfrsor-card-title">{card.title}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title-custom">{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div dangerouslySetInnerHTML={{ __html: modalContent.content }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default SFRSOR;
