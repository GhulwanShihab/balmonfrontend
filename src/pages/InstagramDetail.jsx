// src/components/InstagramDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import iconCal from "../assets/calendar.png";
import iconAuth from "../assets/writer.png";
import FloatingMenu from '../components/FloatingMenu';

const InstagramDetail = () => {
    const { id } = useParams();
    const [instagramData, setInstagramData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/instagrams/${id}`);
                if (!response.ok) {
                    throw new Error('Gagal mengambil data Instagram');
                }
                const data = await response.json();
                setInstagramData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Instagram data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!instagramData) {
        return <p>Instagram tidak ditemukan</p>;
    }

    return (
        <>
            <Container fluid className="bg-light pt-5 pb-5">
                <Container>
                    <Card className="shadow-sm p-4">
                        <Card.Body>
                            <h1 className="mb-3">{instagramData.judulInstagram}</h1>
                            <Row className="mb-3">
                                <Col md={6} className="d-flex align-items-center">
                                    <Image src={iconCal} alt="calendar icon" rounded style={{ width: '24px', height: '24px' }} className="me-2" />
                                    <h6>{instagramData.tanggalInstagram}</h6>
                                </Col>
                                <Col md={6} className="d-flex align-items-center">
                                    <Image src={iconAuth} alt="author icon" rounded style={{ width: '24px', height: '24px' }} className="me-2" />
                                    <h6>{instagramData.authorInstagram}</h6>
                                </Col>
                            </Row>
                            <div className="d-flex justify-content-center">
                                <Card.Img variant="top" src={`http://localhost:3000/${instagramData.fotoInstagram}`} alt="Instagram" style={{ maxWidth: '1000px', width: '100%', height: 'auto' }} />
                            </div>
                            <Card.Text className="mt-4" style={{ fontSize: '1.1em' }}>
                                {instagramData.deskripsiInstagram.map((item, index) => (
                                    <p key={index}>{item.str}</p>
                                ))}
                            </Card.Text>
                            <div className="d-flex justify-content-center">
                                <Card.Img variant="bottom" src={`http://localhost:3000/${instagramData.fotoContent}`} alt="content" className="mt-4" style={{ maxWidth: '1000px', width: '100%', height: 'auto' }} />
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
            <FloatingMenu />
        </>
    );
};

export default InstagramDetail;