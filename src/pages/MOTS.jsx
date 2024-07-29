import React, { useState } from 'react';
import './MOTS.css';

const MOTS = () => {
  // Inisialisasi dengan 'list1' agar list pertama langsung terbuka
  const [selectedList, setSelectedList] = useState('list1');

  const listContent = {
    list1: (
      <div>
        <p>Maritime on The Spot (MoTS) merupakan program afirmatif pemberian sertifikasi kompetensi komunikasi laut ke nelayan, serta perizinan radio komunikasi kapal nelayan secara jemput bola langsung di pelabuhan perikanan dan gratis Sejak 2019, program ini berfokus pada uji coba penggunaan frekuensi radio untuk komunikasi nelayan dan sertifikasi kecakapan operator radio (SRC/LRC).</p>
        <h3>ISR Maritim untuk Perorangan</h3>
        <ol>
          <li>Pengajuan Akun E- Licensing
            <p>
              Syarat :
            </p>
            <ul>
              <li>Formulir Permohonan</li>
              <li>KTP/SIM</li>
              <li>NPWP</li>
              <li>SIUP Perikanan</li>
              <li>SIPI</li>
              <li>NIB</li>
            </ul>
          </li>
          <li>Pengajuan Izin Stasiun Radio
            <p>
              Syarat :
            </p>
            <ul>
              <li>Surat Permohonan</li>
              <li>Groose Akta (Hal, Sampul,Hal. 1, dan Hal. Terakhir)</li>
              <li>Surat Penetapan Callsign/Surat Penggantian Bendera</li>
              <li>Surat Laut atau Pas Tahunan</li>
              <li>Surat Ukur</li>
              <li>Surat Penetapan MMSI</li>
            </ul>
          </li>
        </ol>
      </div>
    ),
    list2: (
      <div>
        <p>Izin penggunaan Spektrum Frekuensi Radio untuk Komunikasi Radio Umum dalam mendukung kegiatan sektor perikanan yang merupakan inovasi solusi lanjutan dari program MoTS.</p>
        <h3>Persyaratan</h3>
        <ul>
          <li>Sertifikat SRC/LRC</li>
          <li>KTP</li>
          <li>PAS FOTO UKURAN 4X6cm dengan latar belakang warna putih, menggunakan kemeja putih dan berdasi hitam</li>
          <li>Surat keterangan berupa:</li>
          <li>Kartu Pelaku Usaha Kelautan dan Perikanan (KUSUKA) yang masih berlaku atau;</li>
          <li>Surat Keterangan Sebagai Pelaku Usaha atau pelaku Dinas Kelautan / Kabupaten / Kota / atau Pelabuhan Perikanan Setempat atau;</li>
          <li>Surat Keterangan Sebagai Operator Radio, bagi Operator Stasiun Radio di Pelabuhan Perikanan atau ASN</li>
        </ul>
      </div>
    ),
    list3: (
      <div>
        <p>Upaya edukasi dan peningkatan kompetensi kepada masyarakat maritim.

        Bimbingan teknis diisi dengan pemberian materi dan praktik penggunaan alat atau perangkat operator radio.

        Mengikuti bimbingan teknis SOR sesuai tingkat kecakapan/wilayah kapal dengan menyertakan dokumen:</p>
        <ul>
          <li>KTP</li>
          <li>PAS FOTO UKURAN 4X6cm dengan latar belakang warna putih, menggunakan kemeja putih dan berdasi hitam</li>
        </ul>
      </div>
    ),
  };

  return (
    <div className="mots-container mb-4">
      <div className="mots-header">
        <h1 className="mots-title">MOTS</h1>
      </div>
      <div className="mots-content">
        <div className="mots-list">
          <ul>
            <li onClick={() => setSelectedList('list1')}>Izin Stasiun Radio (ISR) Maritim</li>
            <li onClick={() => setSelectedList('list2')}>Izin Komunikasi Radio Nelayan (IKRAN)</li>
            <li onClick={() => setSelectedList('list3')}>Bimbingan Teknis Sertifikat Operator Radio Jarak Jangkau Dekat (SRC) Jarak Jangkau Jauh (LRC)</li>
          </ul>
        </div>
        <div className="mots-description">
          {listContent[selectedList]}
        </div>
      </div>
    </div>
  );
};

export default MOTS;
