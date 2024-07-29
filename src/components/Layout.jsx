import React from 'react';
import Navbar from './Navbar.jsx';
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
  return (
    <div style={layoutStyles.layoutContainer}>
      <Navbar />
      <main style={layoutStyles.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
