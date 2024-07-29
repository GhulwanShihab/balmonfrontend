// src/pages/GaleriVideo.jsx
import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import './GaleriVideo.css';

const GaleriVideo = () => {
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3000/galeri-videos');
        if (!response.ok) {
            throw new Error('Gagal mengambil data galeri videos');
        }
        const data = await response.json();
        const merch = data.data;
        
        const getYouTubeVideoId = (url) => {
          const urlObj = new URL(url);
          // Periksa apakah URL memiliki ID video sebagai parameter 'v' atau 'live'
          return urlObj.searchParams.get("v") || urlObj.pathname.split("/").pop();
        };
        
        const galeriVideoData = merch.map(item => ({
          id: item.id,
          title: item.title,
          linkvideo: `https://www.youtube.com/embed/${getYouTubeVideoId(item.linkvideo)}`,
        }));
        
        setDatas(galeriVideoData);
    } catch (error) {
        console.error('Error fetching data:', error);
        setDatas([]);
    }
};

useEffect(() => {
    fetchData();
}, []);


  return (
    <>
      <div>
        <div className="galeri-video-header mb-4">
          <h1 className="galeri-video-title">GALERI VIDEO</h1>
        </div>
      </div>
    <Container className="my-5 galeri-video">
      <Row>
        {datas.map((item) => (
          <Col md={4} key={item.id}>
            <Card className="mb-4">
              <div className="card-video-wrapper">
                <iframe
                  width="100%"
                  height="200"
                  src={item.linkvideo}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
    
  );
};

export default GaleriVideo;
