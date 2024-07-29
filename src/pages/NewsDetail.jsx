import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';

const NewsDetail = () => {
  const { id } = useParams();
  const beritaData = [
    { id: 1, title: "Berita 1", date: "2023-07-01", text: "Deskripsi lengkap tentang berita 1.", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Berita 2", date: "2023-07-02", text: "Deskripsi lengkap tentang berita 2.", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Berita 3", date: "2023-07-03", text: "Deskripsi lengkap tentang berita 3.", image: "https://via.placeholder.com/150" },
    { id: 4, title: "Berita 4", date: "2023-07-04", text: "Deskripsi lengkap tentang berita 4.", image: "https://via.placeholder.com/150" },
    { id: 5, title: "Berita 5", date: "2023-07-05", text: "Deskripsi lengkap tentang berita 5.", image: "https://via.placeholder.com/150" },
    { id: 6, title: "Berita 6", date: "2023-07-06", text: "Deskripsi lengkap tentang berita 6.", image: "https://via.placeholder.com/150" }
  ];

  const berita = beritaData.find(b => b.id === parseInt(id));

  if (!berita) {
    return <Container><p>Berita tidak ditemukan.</p></Container>;
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          <h2>{berita.title}</h2>
          <p className="text-muted">{berita.date}</p>
          <Image src={berita.image} fluid className="mb-4" />
          <p>{berita.text}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default NewsDetail;
