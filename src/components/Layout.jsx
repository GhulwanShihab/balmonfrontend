import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import AdminNavbar from './AdminNavbar.jsx'; // Import AdminNavbar
import Footer from './Footer.jsx';

const layoutStyles = {
  html: {
    height: '100%',
    margin: 0
  },
  body: {
    height: '100%',
    margin: 0
  },
  layoutContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  mainContent: {
    flex: 1
  },
  footerWrapper: {
    backgroundColor: '#f8f9fa'
  },
  footerContent: {
    padding: '20px 0'
  },
  footerLogo: {
    width: '50px',
    height: 'auto',
    marginRight: '10px'
  },
  footerCopyright: {
    backgroundColor: 'darkblue',
    color: 'white',
    padding: '10px 0'
  }
};

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div style={layoutStyles.layoutContainer}>
      {isAdminRoute ? <AdminNavbar /> : <Navbar />}
      <main style={layoutStyles.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
