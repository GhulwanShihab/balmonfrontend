import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./ISR.css";
import isrimg from '../assets/alur-isr.png';
import sanksiisrimg from '../assets/sanksi-isr.png';

const ISR = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  const cardsData = [
    { 
      title: "Persyaratan Persyaratan Permohonan (ISR) Baru Dinas Tetap", 
      description: (
        <ul>
          <li>Surat permohonan ISR ditujukan kepada Dirjen Sumber Daya dan Perangkat Pos dan Informatika cq. Direktur Operasi Sumber Daya.</li>
          <li>Surat pernyataan kesanggupan membayar BHP Frekuensi Radio.</li>
          <li>Salinan Nomor Pokok Wajib Pajak (NPWP).</li>
          <li>Salinan akta pendirian badan hukum perusahaan dan akta perubahan beserta pengesahannya.</li>
          <li>Salinan izin prinsip dan/atau izin penyelenggaraan jaringan telekomunikasi bagi penyelenggara jaringan telekomunikasi atau izin prinsip dan/atau izin penyelenggaraan penyiaran bagi penyelenggara penyiaran (khusus untuk STL Televisi Siaran).</li>
          <li>Isian Formulir ISR yang telah diisi dengan lengkap dan benar.</li>
          <li>Gambar konfigurasi jaringan komunikasi radio dan peta lokasi.</li>
          <li>Data spesifikasi teknis perangkat dan/atau brosur perangkat radio dan antenna. Perangkat yang akan digunakan telah memiliki sertifikat perangkat dari Ditjen Sumber Daya dan Perangkat Pos dan Informatika serta sesuai dengan perencanaan pengkanalan Microwave Link.</li>
        </ul>
      )
    },
    { 
      title: "Persyaratan Persyaratan Permohonan (ISR) Baru Dinas Bergerak Darat", 
      description: (
        <ul>
          <li>Surat permohonan ISR ditujukan kepada Dirjen Sumber Daya dan Perangkat Pos dan Informatika cq. Direktur Operasi Sumber Daya.</li>
          <li>Surat pernyataan kesanggupan membayar BHP Frekuensi Radio.</li>
          <li>Salinan Nomor Pokok Wajib Pajak (NPWP).</li>
          <li>Salinan akta pendirian badan hukum perusahaan dan akta perubahan beserta pengesahannya.</li>
          <li>Salinan izin prinsip dan/atau izin penyelenggaraan penyiaran bagi penyelenggara penyiaran (khusus untuk STL Radio Siaran).</li>
          <li>Isian Formulir ISR yang telah diisi dengan lengkap dan benar.</li>
          <li>Gambar konfigurasi jaringan komunikasi radio dan peta lokasi.</li>
        </ul>
      )
    },
    // Tambahkan card lainnya sesuai kebutuhan
    { 
      title: "Persyaratan Persyaratan Permohonan (ISR) Baru Penyiaran", 
      description: (
        <ul>
          <li>Surat Permohonan (Asli).</li>
          <li>Surat Pernyataan Kesanggupan Membayar BHP Frekuensi Radio (Bermaterai).</li>
          <li>Izin Prinsip Penyelenggaraan Penyiaran (FC).</li>
          <li>Surat Kuasa (FC).</li>
          <li>ID Karyawan (FC).</li>
          <li>Isian Formulir ISR yang telah diisi dengan lengkap dan benar.</li>
          <li>Isian Form A</li>
          <li>Isian Form B1 s.d. B5</li>
          <li>Brosur (Spesifikasi Teknis) Perangkat Radio.</li>
          <li>Brosur (Spesifikasi Teknis) Perangkat Antena.</li>
          <li>Sertifikasi Perangkat.</li>
          <li>NPWP</li>
        </ul>
      )
    },
    { 
      title: "Persyaratan Permohonan Perubahan data dan Penggudangan ISR", 
      description: (
        <ul>
          <li>Surat permohonan ISR ditujukan kepada Dirjen Sumber Daya dan Perangkat Pos dan Informatika cq. Direktur Operasi Sumber Daya.</li>
          <li>Salinan ISR</li>
          <li>Isian Data Perubahan Data atau Penggudangan ISR</li>
          <li>Salinan dokumen pendukung terkait permohonan perubahan data ISR</li>
        </ul>
      )
    },
    { 
      title: "Persyaratan Permohonan Perubahan data dan Penggudangan ISR", 
      description: (
        <ul>
          <li>Surat permohonan ISR ditujukan kepada Dirjen Sumber Daya dan Perangkat Pos dan Informatika cq. Direktur Operasi Sumber Daya.</li>
          <li>Salinan ISR.</li>
          <li>Isian Data Perubahan Data atau Penggudangan ISR.</li>
          <li>Salinan dokumen pendukung terkait permohonan perubahan data ISR.</li>
          <li>Permohonan ISR dinas bergerak darat tidak diperbolehkan menggunakan perangkat radio amatir atau perangkat radio maritim.</li>
        </ul>
      )
    },
    { 
      title: "Persyaratan Permohonan Perubahan data alamat Kantor dan Stasiun", 
      description: (
        <ul>
          <li>Surat Permohonan ke Kementerian Komunikasi;</li>
          <li>Surat Tembusan ke SDPPI.</li>
        </ul>
      )
    },
    { 
      title: "Alur Permohonan ISR serta Ketentuan Perizinan Frekuensi Radio Dinas Tetap", 
      description: (
        <ul>
          <li>Permohonan ISR Dinas Tetap – Microwave Linkdapat diajukan melalui fasilitas perizinan online (elicensing), Pusat Pelayanan Terpadu Ditjen SDPPI atau melalui jasa perposan. Pengajuan permohonan ISR harus dilakukan oleh pengguna frekuensi radio atau perwakilan yang ditunjuk dengan surat kuasa dan tidak diperkenankan melalui pihak ketiga (Calo).</li>
          <li>Surat Pemberitahun Pembayaran (SPP) Biaya Hak Penggunaan (BHP) Frekuensi Radio untuk permohonan ISR baru berlaku selama 60 (enam puluh) hari sejak diterbitkan. Apabila tidak dilakukan pembayaran BHP Frekuensi Radio, maka permohonan ISR dibatalkan.</li>
          <li>SPP BHP Frekuensi Radio untuk perpanjangan tahunan diterbitkan 60 (enam puluh) hari sebelum jatuh tempo. Wajib bayar dapat meminta SPP BHP Frekuensi Radio tersebut, apabila belum menerimanya atau dapat mengunduh SPP BHP Frekuensi Radio melalui fasilitas elicensing.</li>
          <li>Pembayaran BHP Frekuensi Radio dilakukan sebelum jatuh tempo setiap tahunnya. Keterlambatan pembayaran BHP Frekuensi Radio dikenakan sanksi administrasi berupa denda sebesar 2% (dua persen) per bulan sesuai peraturan perundang-undangan.</li>
          <li>Pembayaran Biaya Hak Penggunaan (BHP) Frekuensi Radio dapat dilakukan melalui sistem host-to-host, ATM daninternet bankingBank Mandiri dengan Kode Instansi 50000 (Ditjen SDPPI) dan cukup mencantumkan Kode Pemohon (Client_ID) dan Nomor Invoice (SPP).</li>
          <li>Penggunaan frekuensi radio harus sesuai dengan ISR. Perubahan data administrasi, perpindahan alamat lokasi dan data teknis stasiun radio terlebih dahulu harus mendapatkan persetujuan dengan mengajukan permohonan perubahan data ISR kepada Direktur Jenderal Sumber Daya dan Perangkat Pos dan Informatika cq. Direktur Operasi Sumber Daya.</li>
          <li>Permohonan penghentian izin atau penggudangan ISR diajukan selambat-lambatnya 90 (sembilan puluh) hari sebelum jatuh tempo pembayaran BHP Frekuensi Radio tahunan.</li>
          <li>Penggunaan spektrum frekuensi radio yang tidak memiliki ISR atau tidak sesuai peruntukannya dipidana dengan pidana penjara paling lama 4 (empat) tahun dan atau denda paling banyak Rp 400.000.000,- (empat ratus juta rupiah). Apabila menimbulkan kematian dipidana dengan pidana penjara paling lama 15 (lima belas) tahun.</li>
          <li>Pelanggaraan terhadap ketentuan penggunaan frekuensi radio dapat dikenakan sanksi administrasi berupa pencabutan ISR.</li>
          <li>Informasi lebih lanjut tentang perizinan penggunaan spektrum frekuensi radio dapat menghubungi Pusat Pelayanan Terpadu Ditjen SDPPI, Contact Center 021-30003100 atau Unit Pelaksana Teknis Monitor Spektrum Frekuensi Radio (Balmon, Loka, Posmon) terdekat.</li>
        </ul>
      )
    },
    { 
      title: "Alur Permohonan ISR serta Ketentuan Perizinan Frekuensi Radio Dinas Bergerak Darat", 
      description: (
        <ul>
          <li>Permohonan ISR Dinas Bergerak Darat dapat diajukan melalui fasilitas perizinan online (elicensing), Pusat Pelayanan Terpadu Ditjen SDPPI atau melalui jasa perposan. Pengajuan permohonan ISR harus dilakukan oleh pengguna frekuensi radio atau perwakilan yang ditunjuk dengan surat kuasa dan tidak diperkenankan melalui pihak ketiga (Calo).</li>
          <li>Surat Pemberitahun Pembayaran (SPP) Biaya Hak Penggunaan (BHP) Frekuensi Radio untuk permohonan ISR baru berlaku selama 60 (enam puluh) hari sejak diterbitkan. Apabila tidak dilakukan pembayaran BHP Frekuensi Radio, maka permohonan ISR dibatalkan.</li>
          <li>SPP BHP Frekuensi Radio untuk perpanjangan tahunan diterbitkan 60 (enam puluh) hari sebelum jatuh tempo. Wajib bayar dapat meminta SPP BHP Frekuensi Radio tersebut, apabila belum menerimanya atau dapat mengunduh SPP BHP Frekuensi Radio melalui fasilitas elicensing.</li>
          <li>Pembayaran BHP Frekuensi Radio dilakukan sebelum jatuh tempo setiap tahunnya. Keterlambatan pembayaran BHP Frekuensi Radio dikenakan sanksi administrasi berupa denda sebesar 2% (dua persen) per bulan sesuai peraturan perundang-undangan.</li>
          <li>Pembayaran Biaya Hak Penggunaan (BHP) Frekuensi Radio dapat dilakukan melalui sistem host-to-host, ATM daninternet bankingBank Mandiri dengan Kode Instansi 50000 (Ditjen SDPPI) dan cukup mencantumkan Kode Pemohon (Client_ID) dan Nomor Invoice (SPP).</li>
          <li>Penggunaan frekuensi radio harus sesuai dengan ISR. Perubahan data administrasi, perpindahan alamat lokasi dan data teknis stasiun radio terlebih dahulu harus mendapatkan persetujuan dengan mengajukan permohonan perubahan data ISR kepada Direktur Jenderal Sumber Daya dan Perangkat Pos dan Informatika cq. Direktur Operasi Sumber Daya.</li>
          <li>Permohonan penghentian izin atau penggudangan ISR diajukan selambat-lambatnya 90 (sembilan puluh) hari sebelum jatuh tempo pembayaran BHP Frekuensi Radio tahunan.</li>
          <li>Penggunaan spektrum frekuensi radio yang tidak memiliki ISR atau tidak sesuai peruntukannya dipidana dengan pidana penjara paling lama 4 (empat) tahun dan atau denda paling banyak Rp 400.000.000,- (empat ratus juta rupiah). Apabila menimbulkan kematian dipidana dengan pidana penjara paling lama 15 (lima belas) tahun.</li>
          <li>Pelanggaraan terhadap ketentuan penggunaan frekuensi radio dapat dikenakan sanksi administrasi berupa pencabutan ISR.</li>
        </ul>
      )
    },
    { 
      title: "Persyaratan Permohonan Penggudangan dan Perubahan data Frekuensi dan Perangkat", 
      description: (
        <ul>
          <li>Surat Permohonan Perubahan Data Perangkat;</li>
          <li>Surat Kuasa (bermaterai);</li>
          <li>Gambar Diagram Sistem Pemancar;</li>
          <li>Isian Form A</li>
          <li>Isian Form F</li>
        </ul>
      )
    },
  ];

  return (
    <Container className="isr-section">
      <div>
        <div className="isr-header mb-4">
          <h1 className="isr-bg-title">IZIN STASIUN RADIO</h1>
        </div>
      </div>
      <Row className="align-items-center mb-5">
        <Col md={6} className="text-md-left mb-4 mb-md-0">
          <h2 className="isr-title text-left">Izin Stasiun Radio</h2>
          <p className="isr-description text-left">Izin Stasiun Radio yang selanjutnya disingkat ISR adalah izin penggunaan spektrum frekuensi radio dalam bentuk kanal frekuensi radio berdasarkan persyaratan tertentu.</p>
          <Button className="isr-button">Proses Perizinan &gt;</Button>
        </Col>
        <Col md={6} className="text-center">
          <img
            src={isrimg}
            alt="ISR"
            className="img-fluid"
          />
        </Col>
      </Row>
      <Row className="align-items-center mb-5">
        <Col md={6} className="order-md-2 text-md-right mb-4 mb-md-0">
          <h2 className="isr-title text-right">CALL CENTER BALAI MONITOR SPEKTRUM FREKUENSI RADIO KELAS II LAMPUNG</h2>
          <p className="isr-description text-right">MASIH BINGUNG? LANGSUNG AJA HUBUNGI KAMI</p>
          <Button className="isr-button">WhatsApp &gt;</Button>
        </Col>
        <Col md={6} className="order-md-1 text-center">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/R3mzJQ2_31I?si=HedSfd0x116T5fWo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
      <Row className="text-center mb-5">
        <Col>
          <h2 className="isr-title text-center">Syarat dan Ketentuan</h2>
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
      <Row className="text-center mb-5">
        <Col>
          <h2 className="isr-title text-center">Tata Cara Pembayaran & Sanksi</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <img
            src={sanksiisrimg}
            alt="Perpanjangan"
            className="img-fluid isr-bottom-image"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ISR;
