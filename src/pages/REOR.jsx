import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./REOR.css";
import reorimg1 from '../assets/alur-reor.png';
import reorimg2 from '../assets/serti-reor.png';


const REOR = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  const cardsData= [
    {
        title: "Persyaratan",
        description: (
           <ol>
                <li>Permohonan perpanjangan Sertifikat REOR dapat diajukan paling cepat 12 (dua belas) bulan dan paling lambat 7 hari kerja sebelum akhir masa laku Sertifikat.</li>
                <li>Melampirkan dokumen :
                    <ul>
                        <li>KTP</li>
                        <li>PAS FOTO UKURAN 4X6cm dengan latar belakang warna putih, menggunakan kemeja putih dan berdasi hitam</li>
                        <li>Sertifikat Kompetensi Operator Radio Lama</li>
                        <li>Waktu Penyelesaian maksimal 14 hari kerja*</li>
                    </ul>
                </li>
           </ol> 
        )
    },
    {
        title: "Biaya",
        description: (
            <p>Mulai 18 November 2023, untuk layanan Sertifikasi SOR (REOR & IAR-IKRAP) baik baru atau perpanjangan tidak dikenakan biaya (Gratis).</p>
        )
    }

  ];
  return (
    <Container className="reor-section">
      <div>
        <div className="reor-header mb-5">
          <h1 className="reor-bg-title">PERPANJANGAN SERTIFIKAT REOR</h1>
        </div>
        <div className="mb-5"  style={{textAlign:'justify'}}>
            <p>
            Sertifikasi Radio Elektronik dan Elektronik Radio atau yang lebih dikenal dengan sebutan REOR merupakan salah satu layanan publik yang diselenggarakan oleh Direktorat Jenderal Sumber Daya dan Perangkat Pos dan Informatika (Ditjen SDPPI), Kementerian Komunikasi dan Informatika. Sertifikat tersebut adalah keterangan/bukti bahwa seseorang memiliki kompetensi untuk dapat melakukan pekerjaan sebagai radio elektronika dan/atau operator radio. Kompetensi yang dipersyaratkan juga termasuk mengoperasikan perangkat komunikasi radio pelayaran maritim berstandar Global Maritime Distress Safety System (GMDSS) pada stasiun kapal atau stasiun radio pantai sesuai ketentuan perundang-undangan. <br />
            Seseorang yang berprofesi sebagai Pelaut atau Mualim dapat memperoleh sertifikat tersebut dengan terlebih dahulu mengikuti pendidikan dan pelatihan di Lembaga Diklat (Lemdik). Lembaga tersebut bertugas melaksanakan pendidikan dan pelatihan di bidang radio elektronika dan operator radio. <br />
            Setelah dinyatakan lulus diklat dan ujian, Pelaut atau Mualim akan mendapatkan sertifikat yang berlaku selama 5 tahun. Sertifikat tersebut dapat diperpanjang paling cepat 12 bulan dan selambatnya 1 hari sebelum masa laku sertifikat berakhir. Berikut prosedur permohonan sertifikasi REOR.
            </p>
        </div>
      </div>
      <Row className="align-items-center mb-5">
        <Col md={6} className="text-md-left mb-4 mb-md-0">
          <h2 className="reor-title text-left">Langkah Permohonan Sertifikasi REOR</h2>
          <ol>
            <li>Pemohon Sertifikat baru wajib mengikuti proses pembelajaran di Lembaga Diklat REOR yang telah ditunjuk sesuai tingkatan kompetensi yang akan diambil dan jadwal ujian nasional yang sudah ditetapkan;</li>
            <li>Pendaftaran untuk mengikuti Ujian Negara REOR wajib diajukan secara online melalui e-licensing REOR;</li>
            <li>Dokumen persyaratan adalah:
                <ul>
                    <li>Scan Surat Tanda Tamat Pendidikan dan Pelatihan REOR yang diterbitkan oleh Lemdik berwenang;</li>
                    <li>KTP;</li>
                    <li>Foto diri terbaru ukuran 4 x 6 berlatar belakang putih mengenakan kemeja putih dan berdasi hitam;</li>
                </ul>
            </li>
            <li>Pengambilan Sertifikat Baru dikirim ke Lembaga Diklat tempat pengukuhan / pelantikan dilaksanakan;</li>
            <li>Biaya Ujian & Penerbitan Sertifikat:
                <ul>
                    <li>Sertifikat Radio Elektronika Kelas 2 (SRE-II) & Sertifikat Radio Elektronika Kelas 1 (SRE-I) – Rp 0</li>
                    <li>Sertifikat Operator Umum (SOU) – Rp 0</li>
                    <li>Sertifikat Operator Terbatas (SOT) – Rp 0</li>
                </ul>
            </li>
          </ol>
          <Button className="reor-button">Lihat Selengkapnya &gt; </Button>
        </Col>
        <Col md={6} className="text-center">
          <img
            src={reorimg1}
            alt="REOR"
            className="img-fluid"
          />
        </Col>
      </Row>
      <div className="mb-5" style={{textAlign:'justify'}}>
        <p>Guna mengakomodir kebutuhan stakeholder dan dalam rangka akselerasi tranformasi digital, Ditjen SDPPI telah meluncurkan sistem layanan perpanjangan Sertifikat Radio Elektronika dan Operator Radio (REOR) yang dapat diakses secara daring dan terintegrasi dengan aplikasi booking online. Pengembangan aplikasi ini dilakukan untuk mempermudah pengajuan permohonan dalam perpanjangan Sertifikat REOR. <br /></p>
        <p>Pelaut atau Mualim yang ingin memperpanjang masa berlaku sertifikat REOR, bisa mengunjungi laman https://antrian.postel.go.id dan memilih menu Antrian Reor untuk booking nomor antrian. Dalam aplikasi tersebut pengunjung juga bisa mengatur jadwal pengambilan sertifikatnya pada beberapa kantor UPT Ditjen SDPPI yang tersebar di seluruh Indonesia, salah satunya di Balmon SFR Kelas II Lampung.</p>
      </div>
      <Row className="align-items-center mb-5">
        <Col md={6} className="order-md-2 text-md-left mb-4 mb-md-0">
          <h2 className="reor-title text-left">Langkah booking online pengambilan sertifikat perpanjangan REOR</h2>
          <ol>
            <li>Kunjungi laman https://antrian.postel.go.id pilih Antrean REOR;</li>
            <li>Masukkan Nomor Invoice dan Client ID, kemudian klik SUBMIT;</li>
            <li>Pilih Metode Pengambilan: Langsung atau diwakilkan, kemudian klik SUBMIT;</li>
            <li>Jika pilih diwakilkan, masukkan Data Wali:
                <ul>
                    <li>Identitas Wakil;</li>
                    <li>Nama Wakil;</li>
                    <li>Unggah foto KTP Wakil;</li>
                    <li>Unggah foto wajah Wakil;</li>
                    <li>Unggah Surat Kuasa;</li>
                </ul>
            </li>
            <li>Kemudian pilih tanggal pengambilan, pilih jam pengambilan, kemudian klik SUBMIT;</li>
            <li>Pemohon akan mendapat QR Code nomor antrian;</li>
            <li>QR Code harus ditunjukkan ke Petugas Admin UPT saat pengambilan;</li>
            <li>Biaya Perpanjangan: Rp 0</li>
          </ol>
        </Col>
        <Col md={6} className="order-md-1 text-center">
          <img
            src={reorimg2}
            alt="IKRAP"
            className="img-fluid"
          />
        </Col>
      </Row>
      <Row className="text-center mb-5">
        <Col>
          <h2 className="reor-title text-center">PENGAMBILAN SERTIFIKAT PERPANJANGAN REOR</h2>
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        {cardsData.map((card, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="reor-info-card" onClick={() => handleCardClick(index)}>
              <Card.Body className="reor-card-body">
                <div className="reor-card-title-wrapper">
                  <Card.Title className="reor-card-title">{card.title}</Card.Title>
                </div>
                {selectedCard === index && <Card.Text className="reor-card-description">{card.description}</Card.Text>}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="mb-5"  style={{textAlign:'justify'}}>
        <p>
            Selain itu terdapat sistem pelayanan Sertfikasi Operator Radio secara Online yang bertujuan mendukung program Maritime-On-The-Spot, dalam membentuk Para Operator Radio Maritime untuk pelayaran rakyat yang bertanggung jawab dan taat hukum melalui inovasi teknologi. http://serena.postel.go.id/ <br />
            
        </p>
      </div>
    </Container>
  );
};

export default REOR;
