// src/pages/VideoTerkini.jsx
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './VideoTerkini.css'; // Buat atau perbarui CSS untuk styling

const VideoTerkini = () => {
  const [datas, setDatas] = useState([]);

  const fetchDataVideos = async () => {
    try {
      const response = await fetch('http://localhost:3000/galeri-videos'); // Update URL sesuai API Anda
      if (!response.ok) {
        throw new Error('Gagal mengambil data video terkini');
      }
      const data = await response.json();
      const videosData = data.data;
      const lastThreeVideos = videosData.slice(0, 3); // Limit untuk menampilkan 3 video terkini
      setDatas(lastThreeVideos);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setDatas([]);
    }
  };

  useEffect(() => {
    fetchDataVideos();
  }, []);

  const getYouTubeVideoId = (url) => {
    try {
      const urlObj = new URL(url);
      return urlObj.searchParams.get("v") || urlObj.pathname.split("/").pop();
    } catch (e) {
      console.error('Invalid URL:', url);
      return null;
    }
  };

  return (
    <div className="bg-light px-3 py-4">
      <div className="text-center mb-4">
        <h3 className="text-primary font-weight-bold" style={{ color: "darkblue" }}>
          <strong>VIDEO TERKINI</strong>
        </h3>
      </div>
      <Container className="my-5 video-terkini">
        <Row>
          {datas.map((data, index) => {
            const videoId = getYouTubeVideoId(data.linkvideo);
            if (!videoId) return null; // Skip invalid URLs

            return (
              <Col key={index} md={4} className="mb-4">
                <Card className="shadow-sm h-100">
                  <div className="card-video-wrapper">
                    <iframe
                      width="100%"
                      height="200"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={data.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <Card.Body d-flex flex-column>
                    <h5 className="card-title text-truncate" title={data.title}>
                      {data.title}
                    </h5>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default VideoTerkini;
