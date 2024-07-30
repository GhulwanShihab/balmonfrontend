import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/logo.png';

const AdminNavbar = () => {
  const location = useLocation();

  // Check if the current route is under '/admin'
  const isAdminRoute = location.pathname.startsWith('/admin');

  if (!isAdminRoute) {
    return null; // Don't render the admin navbar if not on an admin route
  }

  // Inline styles for navbar
  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    padding: '0px 0',
  };

  const navItemStyle = {
    padding: '8px 15px',
    color: 'black',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  };

  return (
    <Navbar expand="lg" style={navbarStyle}>
      <Container>
        <Navbar.Brand as={Link} to="/admin">
          <img
            src={logoImage}
            width="70"
            height="45"
            alt="Admin Logo"
            style={{ display: 'block', height: 'auto' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin" style={navItemStyle}>Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/admin/berita" style={navItemStyle}>Berita</Nav.Link>
            <Nav.Link as={Link} to="/admin/instagram" style={navItemStyle}>Instagram</Nav.Link>
            <Nav.Link as={Link} to="/admin/galeri-foto" style={navItemStyle}>Galeri Foto</Nav.Link>
            <Nav.Link as={Link} to="/admin/galeri-videos" style={navItemStyle}>Galeri Video</Nav.Link>
            <Nav.Link as={Link} to="/admin/struktur" style={navItemStyle}>Struktur</Nav.Link>
            <Nav.Link as={Link} to="/admin/iar" style={navItemStyle}>IAR</Nav.Link>
            <Nav.Link as={Link} to="/admin/visi-misi" style={navItemStyle}>Visi Misi</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;
