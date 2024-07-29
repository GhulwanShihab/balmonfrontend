import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  const loadingContainerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(31, 41, 55, 0.75)', // bg-gray-800 bg-opacity-75
    zIndex: 50,
  };

  const textStyle = {
    textAlign: 'center',
    color: 'white',
  };

  const loadingTextStyle = {
    fontSize: '2rem', // text-4xl
    fontWeight: 'bold',
    marginRight: '0.25rem', // mr-1
  };

  return (
    <div style={loadingContainerStyle}>
      <div style={textStyle}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={loadingTextStyle}>Loading</span>
          <Spinner animation="grow" variant="light" size="sm" />
          <Spinner animation="grow" variant="light" size="sm" style={{ marginLeft: '0.25rem' }} />
          <Spinner animation="grow" variant="light" size="sm" style={{ marginLeft: '0.25rem' }} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
