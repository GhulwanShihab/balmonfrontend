import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import './GaleriFoto.css'; // Update or create CSS for gallery

const GaleriFoto = () => {
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/galeri-foto'); // Update the URL to your API endpoint
      if (!response.ok) {
        throw new Error('Gagal mengambil data galeri foto');
      }
      const data = await response.json();
      const fotoData = data.data.map(item => ({
        id: item.id,
        judulFoto: item.judulFoto,
        foto: `http://localhost:3000/${item.foto}`, // Ensure correct URL for image
      }));
      setDatas(fotoData);
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
        <div className="galeri-foto-header mb-4">
          <h1 className="galeri-foto-title">GALERI FOTO</h1>
        </div>
      </div>
      <Container className="my-5 galeri-foto">
        <Row>
          {datas.map((item) => (
            <Col md={4} key={item.id}>
              <Card className="mb-4">
                <div className="card-image-wrapper">
                  <img
                    src={item.foto}
                    alt={item.judulFoto}
                    className="card-image"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{item.judulFoto}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default GaleriFoto;
