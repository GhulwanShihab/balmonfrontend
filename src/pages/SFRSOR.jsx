import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Modal, Button } from 'react-bootstrap';
import './SFRSOR.css';

const SFRSOR = () => {
  const [selectedList, setSelectedList] = useState(1);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });
  const [showModal, setShowModal] = useState(false);

  const handleListClick = (index) => {
    setSelectedList(index);
  };

  const handleCardClick = (card) => {
    setModalContent(card);
    setShowModal(true);
  };

  const cardsDataSFR = [
    {
      title: "Persyaratan SFR",
      description: "Deskripsi lengkap untuk Persyaratan SFR...",
    },
    {
      title: "Biaya SFR",
      description: "Deskripsi lengkap untuk Biaya SFR...",
    },
    {
      title: "Dokumen SFR",
      description: "Deskripsi lengkap untuk Dokumen SFR...",
    },
  ];

  const cardsDataSOR = [
    {
      title: "Persyaratan SOR",
      description: "Deskripsi lengkap untuk Persyaratan SOR...",
    },
    {
      title: "Biaya SOR",
      description: "Deskripsi lengkap untuk Biaya SOR...",
    },
    {
      title: "Dokumen SOR",
      description: "Deskripsi lengkap untuk Dokumen SOR...",
    },
  ];

  const renderCards = (cardsData) =>
    cardsData.map((card, index) => (
      <Col md={4} sm={6} xs={12} key={index} className="mb-4">
        <Card className="sfrsor-info-card" onClick={() => handleCardClick(card)}>
          <Card.Body>
            <Card.Title className="sfrsor-card-title">{card.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    ));

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
          {selectedList === 1 && (
            <Row className="justify-content-center">
              {renderCards(cardsDataSFR)}
            </Row>
          )}
          {selectedList === 2 && (
            <Row className="justify-content-center">
              {renderCards(cardsDataSOR)}
            </Row>
          )}
        </Col>
      </Row>

    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title className="modal-title-custom">{modalContent.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className="modal-subtitle">Sub Judul</h5>
        <p>{modalContent.description}</p>
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
