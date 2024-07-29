import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./VisiMisi.css";
import alurpenanganan from '../assets/alur-penanganan-gangguan.png';

const GangguanFrekuensi = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  const cardsData = [
    { 
      title: "Tata Cara Registrasi Untuk Pemegang ISR", 
      description: (
        <ul>
          <li>Pelapor bisa membuka aplikasi Trouble Ticket melalui laman http://laporgangguansfr.postel.go.id.</li>
          <li>Memilih link User Registration di bagian atas laman</li>
          <li>Laman Term & Condition akan muncul. Centang kotak “Ya, Saya setuju” untuk melanjutkan dan klik tombol Next</li>
          <li>Muncul pilihan Pemegang ISR atau Non Pemegang ISR</li>
          <li>Pilih “Pemegang ISR”, sehingga akan muncul input data Nomor ISR</li>
          <li>Input Nomor ISR yang masih valid sehingga sistem akan otomatis memvalidasi datanya</li>
          <li>Isi data pribadi pada laman User Registration. Klik Save untuk melanjutkan</li>
          <li>Cek inbox email yang telah didaftarkan lalu klik tombol Konfirmasi Akun untuk aktivasi akun</li>
          <li>Akun Pengguna terbentuk pada aplikasi Trouble Ticket</li>
        </ul>
      )
    },
    { 
      title: "Tata Cara Registrasi Untuk Non Pemegang ISR", 
      description: (
        <ul>
          <li>Pelapor bisa membuka aplikasi Trouble Ticket melalui laman http://laporgangguansfr.postel.go.id.</li>
          <li>Memilih link User Registration di bagian atas laman.</li>
          <li>Laman Term & Condition akan muncul. Centang kotak “Ya, Saya setuju” untuk melanjutkan dan klik tombol</li>
          <li>Muncul pilihan Pemegang ISR atau Non Pemegang ISR</li>
          <li>Pilih “Non Pemegang ISR”</li>
          <li>Isi data pribadi pada laman User Registration. Klik Save untuk melanjutkan.</li>
          <li>Cek inbox email yang telah didaftarkan lalu klik tombol Konfirmasi Akun untuk aktivasi akun</li>
          <li>Akun Pengguna terbentuk pada aplikasi Trouble Ticket</li>
        </ul>
      )
    },
    // Tambahkan card lainnya sesuai kebutuhan
  ];
  return (
    <Container className="iar-section">
      <div>
        <div className="iar-header mb-4">
          <h1 className="iar-bg-title">LAPOR GANGGUAN FREKUENSI</h1>
        </div>
      </div>
      <Row className="align-items-center mb-5">
        <Col md={6} className="text-md-left mb-4 mb-md-0">
          <h2 className="iar-title text-left">Prosedur Pelaporan Gangguan Frekuensi</h2>
          <p className="iar-description text-left">
            <ul className="text-left">
                <li className="text-left">Masukkan username dan password akun, kemudian pilih Eksternal SDPPI, pilih Bahasa,</li>
                <li>Lalu pelapor dapat memilih menu di bagian kiri aplikasi. Klik Aplikasi, kemudian Pusat Bantuan,</li>
                <li>Klik Tambah Kasus Gangguan</li>
                <li>Isi form laporan gangguan</li>
                <li>Klik tombol Kirim jika form aduan sudah diisi lengkap</li>
                <li>Notifikasi data aduan tersimpan/terkirim</li>
                <li>Cek status pengaduan pertama kali adalah (Open) dilihat dari menu user pelapor</li>
                <li>Cek email Notifikasi Aduan di email pengadu/pelapor. Email notifikasi aduan yang diterima akan disertai dua lampiran dokumen yang dapat digunakan sebagai bukti lapor</li>
            </ul>
          </p>
          <Button className="iar-button">Lapor Gangguan &gt; </Button>
        </Col>
        <Col md={6} className="text-center">
          <img
            src={alurpenanganan}
            alt="IAR"
            className="img-fluid"
          />
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        {cardsData.map((card, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="isr-info-card" onClick={() => handleCardClick(index)}>
              <Card.Body className="isr-card-body">
                <div className="isr-card-title-wrapper">
                  <Card.Title className="isr-card-title">{card.title}</Card.Title>
                </div>
                {selectedCard === index && <Card.Text className="isr-card-description">{card.description}</Card.Text>}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default GangguanFrekuensi;
