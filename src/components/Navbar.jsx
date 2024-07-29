import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';

const MyNavbar = () => {
  // Inline styles for navbar
  const navbarStyle = {
    position: 'fixed', // Keep navbar fixed at the top
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999, // Ensure it is above other content
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    padding: '0px 0', // Reduced padding for a shorter navbar
  };

  // Inline styles for top line
  const topLineStyle = {
    height: '10px',
    backgroundColor: 'darkblue',
  };

  // Inline styles for nav items
  const navItemStyle = {
    padding: '8px 15px', // Adjusted padding for nav items
    borderRadius: '5px',
    color: 'black',
    textDecoration: 'none',
    border: '2px solid transparent',
    fontWeight: 'normal', // Normal font weight by default
    transition: 'all 0.3s ease', // Smooth transition for hover effects
  };

  const navItemHoverStyle = {
    backgroundColor: 'darkblue',
    color: 'white',
    border: '2px solid blue',
    fontWeight: 'bold', // Bold font weight on hover
  };

  return (
    <>
      
      <Navbar expand="lg" style={navbarStyle}>
      <div style={topLineStyle}></div>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logoImage}
              width="70"
              height="45"
              alt="Balmon Lampung"
              style={{ display: 'block', height: 'auto' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="justify-content-end">
              <Nav.Link 
                as={Link} 
                to="/" 
                style={navItemStyle} 
                onMouseOver={e => e.currentTarget.style = { ...navItemStyle, ...navItemHoverStyle }} 
                onMouseOut={e => e.currentTarget.style = navItemStyle}
              >
                BERANDA
              </Nav.Link>
              <Dropdown>
                <Dropdown.Toggle 
                  as={Nav.Link} 
                  style={navItemStyle} 
                  onMouseOver={e => e.currentTarget.style = { ...navItemStyle, ...navItemHoverStyle }} 
                  onMouseOut={e => e.currentTarget.style = navItemStyle}
                >
                  PROFIL
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/struktur-pengurus" style={navItemStyle}>Struktur Organisasi</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/visimisi" style={navItemStyle}>Visi & Misi</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/tugasfungsi" style={navItemStyle}>Tugas & Fungsi</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle 
                  as={Nav.Link} 
                  style={navItemStyle} 
                  onMouseOver={e => e.currentTarget.style = { ...navItemStyle, ...navItemHoverStyle }} 
                  onMouseOut={e => e.currentTarget.style = navItemStyle}
                >
                  PELAYANAN
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/sfrsor" style={navItemStyle}>Izin SFR & SOR</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/iar" style={navItemStyle}>Izin Amatir Radio & IKRAP</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/isr" style={navItemStyle}>Izin Stasiun Radio</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/reor" style={navItemStyle}>Perpanjangan Sertifikat REOR</Dropdown.Item>
                  <Dropdown.Item href="https://sertifikasi.postel.go.id/" target="_blank" rel="noopener noreferrer" style={navItemStyle}>
                    Sertifikasi Alat & Perangkat
                  </Dropdown.Item>
                  <Dropdown.Item href="https://www.postel.go.id/sdppi_maps/10-20200601-sdppi-maps-simulasi-bhp.php" target="_blank" rel="noopener noreferrer" style={navItemStyle}>
                    Simulasi BPH Frekuensi
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle 
                  as={Nav.Link} 
                  style={navItemStyle} 
                  onMouseOver={e => e.currentTarget.style = { ...navItemStyle, ...navItemHoverStyle }} 
                  onMouseOut={e => e.currentTarget.style = navItemStyle}
                >
                  PROGRAM
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/mots" style={navItemStyle}>MOTS</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/gangguan-frekuensi" style={navItemStyle}>Lapor Gangguan Frekuensi</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/wbs" style={navItemStyle}>Whistle Blowing System (WBS)</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/sp4n" style={navItemStyle}>SP4N Lapor!</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle 
                  as={Nav.Link} 
                  style={navItemStyle} 
                  onMouseOver={e => e.currentTarget.style = { ...navItemStyle, ...navItemHoverStyle }} 
                  onMouseOut={e => e.currentTarget.style = navItemStyle}
                >
                  PUBLIKASI
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/berita" style={navItemStyle}>Artikel</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/instagram" style={navItemStyle}>Instagram</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/galeri-foto" style={navItemStyle}>Galeri Foto</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/galeri-video" style={navItemStyle}>Galeri Video</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link 
                as={Link} 
                to="/contact" 
                style={navItemStyle} 
                onMouseOver={e => e.currentTarget.style = { ...navItemStyle, ...navItemHoverStyle }} 
                onMouseOut={e => e.currentTarget.style = navItemStyle}
              >
                KONTAK
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
