import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import FloatingMenu from "../components/FloatingMenu";
import Header from '../assets/title-bg.png'; // Adjust path if needed

const ITEMS_PER_PAGE = 2;

const DaftarBerita = () => {
    const [datas, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/beritas');
            if (!response.ok) {
                throw new Error('Gagal mengambil data berita');
            }
            const data = await response.json();
            const newsData = data.data;
            setData(newsData);
        } catch (error) {
            console.error('Error fetching news:', error);
            setData([]);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(datas.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = datas.slice(startIndex, endIndex);

    return (
        <>
            <div className="bg-light py-5">
                <Container className="mb-4">
                    <Image src={Header} alt="Header Image" className="img-fluid rounded" />
                </Container>
                <Container>
                    <Row>
                        {currentItems.map((data, index) => (
                            <Col md={4} className="mb-4" key={index}>
                                <Card className="h-100">
                                    <Card.Img variant="top" src={`http://localhost:3000/${data.fotoBerita}`} alt="News Image" className="img-fluid" />
                                    <Card.Body>
                                        <Card.Title>{data.judulBerita}</Card.Title>
                                        <Card.Text>
                                            Author: {data.authorBerita}
                                        </Card.Text>
                                        <Card.Text>
                                            Tanggal Publish: {data.tanggalBerita}
                                        </Card.Text>
                                        <Link to={`/berita/${data.id}`}>
                                            <Button variant="primary" className="w-100">Read more</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    <div className="d-flex justify-content-center mt-4">
                        <Button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            variant="secondary"
                            className="mx-2"
                        >
                            Sebelumnya
                        </Button>
                        <Button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            variant="secondary"
                            className="mx-2"
                        >
                            Selanjutnya
                        </Button>
                    </div>
                </Container>
            </div>
            <FloatingMenu />
        </>
    );
};

export default DaftarBerita;
