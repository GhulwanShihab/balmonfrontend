// src/pages/Profil.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Accordion, Button, Modal } from 'react-bootstrap';
import './Profil.css';

const Profil = () => {
  const [selectedList, setSelectedList] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  // Fungsi untuk menangani klik pada list
  const handleListClick = (index) => {
    setSelectedList(index);
  };

  // Fungsi untuk membuka modal
  const handleShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  // Fungsi untuk menutup modal
  const handleCloseModal = () => setShowModal(false);

  return (
    <Container>
      <div>
        <div className="profil-header mb-4">
          <h1 className="profil-title">PROFIL</h1>
        </div>
      </div>
      <h2></h2>
      <Row>
        {/* Bagian kiri dengan list dalam card */}
        <Col md={4} xs={12}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item action onClick={() => handleListClick(1)}>
                  Struktur Organisasi
                </ListGroup.Item>
                <ListGroup.Item action onClick={() => handleListClick(2)}>
                  Visi dan Misi
                </ListGroup.Item>
                <ListGroup.Item action onClick={() => handleListClick(3)}>
                  Tugas dan Fungsi
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        {/* Bagian kanan dengan deskripsi dari list yang dipilih */}
        <Col md={8} xs={12}>
          <Card>
            <Card.Body>
              {selectedList === 1 && (
                <>
                  <h3>Struktur Organisasi</h3>
                  <p>Ini adalah deskripsi untuk List 1.</p>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Menteri
                        <Button
                          variant="primary"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleShowModal({
                              name: 'Menteri',
                              title: 'Menteri',
                              bio: 'Biografi Menteri',
                              photo: 'photo_url_menteri'
                            });
                          }}
                          style={{ marginLeft: 'auto' }}
                        >
                          Lihat Profil
                        </Button>
                      </Accordion.Header>
                      <Accordion.Body>
                        <Accordion>
                          <Accordion.Item eventKey="0-0">
                            <Accordion.Header>
                              Ketua
                              <Button
                                variant="primary"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleShowModal({
                                    name: 'Ketua',
                                    title: 'Ketua',
                                    bio: 'Biografi Ketua',
                                    photo: 'photo_url_ketua'
                                  });
                                }}
                                style={{ marginLeft: 'auto' }}
                              >
                                Lihat Profil
                              </Button>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Accordion>
                                <Accordion.Item eventKey="0-0-0">
                                  <Accordion.Header>
                                    Anggota 1
                                    <Button
                                      variant="primary"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleShowModal({
                                          name: 'Anggota 1',
                                          title: 'Ketua - Anggota 1',
                                          bio: 'Biografi Anggota 1',
                                          photo: 'photo_url_1'
                                        });
                                      }}
                                      style={{ marginLeft: 'auto' }}
                                    >
                                      Lihat Profil
                                    </Button>
                                  </Accordion.Header>
                                </Accordion.Item>
                                <Accordion.Item eventKey="0-0-1">
                                  <Accordion.Header>
                                    Anggota 2
                                    <Button
                                      variant="primary"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleShowModal({
                                          name: 'Anggota 2',
                                          title: 'Ketua - Anggota 2',
                                          bio: 'Biografi Anggota 2',
                                          photo: 'photo_url_2'
                                        });
                                      }}
                                      style={{ marginLeft: 'auto' }}
                                    >
                                      Lihat Profil
                                    </Button>
                                  </Accordion.Header>
                                </Accordion.Item>
                              </Accordion>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="0-1">
                            <Accordion.Header>
                              Sekretaris
                              <Button
                                variant="primary"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleShowModal({
                                    name: 'Sekretaris',
                                    title: 'Sekretaris',
                                    bio: 'Biografi Sekretaris',
                                    photo: 'photo_url_sekretaris'
                                  });
                                }}
                                style={{ marginLeft: 'auto' }}
                              >
                                Lihat Profil
                              </Button>
                            </Accordion.Header>
                          </Accordion.Item>
                        </Accordion>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </>
              )}
              {selectedList === 2 && (
                <>
                  <h3>Visi</h3>
                  <p>Ini adalah visi</p>
                  <h3>Misi</h3>
                  <p>Ini adalah Misi</p>
                </>
              )}
              {selectedList === 3 && (
                <>
                  <h3>Tugas</h3>
                  <p>Ini adalah tugas</p>
                  <h3>Fungsi</h3>
                  <p>Ini adalah fungsi</p>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal untuk menampilkan profil */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalContent.photo} alt={modalContent.name} className="img-fluid mb-3" />
          <h5>{modalContent.name}</h5>
          <p>{modalContent.bio}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Profil;

//Created by Abdur Rohman