import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './SOR.css';

const SOR = () => {
  const [activeList, setActiveList] = useState('list1');
  const [cards, setCards] = useState([
    { id: 1, title: 'Card 1', description: 'Deskripsi untuk Card 1.', isOpen: false },
    { id: 2, title: 'Card 2', description: 'Deskripsi untuk Card 2.', isOpen: false },
    { id: 3, title: 'Card 3', description: 'Deskripsi untuk Card 3.', isOpen: false }
  ]);

  const handleListClick = (list) => {
    setActiveList(list);
  };

  const toggleCard = (cardId) => {
    const updatedCards = cards.map(card =>
      card.id === cardId ? { ...card, isOpen: !card.isOpen } : card
    );
    setCards(updatedCards);
  };

  return (
    <Container className="sfr-container">
      <Row>
        <Col md={3}>
          <Card className="list-card">
            <Card.Body>
              <Card.Title className={activeList === 'list1' ? 'active' : ''} onClick={() => handleListClick('list1')}>List 1</Card.Title>
              <Card.Title className={activeList === 'list2' ? 'active' : ''} onClick={() => handleListClick('list2')}>List 2</Card.Title>
              <Card.Title className={activeList === 'list3' ? 'active' : ''} onClick={() => handleListClick('list3')}>List 3</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          {activeList === 'list1' && (
            <Row>
              {cards.map(card => (
                <Col key={card.id} md={4}>
                  <Card className="content-card" onClick={() => toggleCard(card.id)}>
                    <Card.Body className={card.isOpen ? 'open' : 'closed'}>
                      <Card.Title>{card.title}</Card.Title>
                      {card.isOpen && <Card.Text>{card.description}</Card.Text>}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
          {activeList === 'list2' && <p>Deskripsi untuk List 2.</p>}
          {activeList === 'list3' && <p>Deskripsi untuk List 3.</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default SOR;
