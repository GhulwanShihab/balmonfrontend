import React, { useEffect, useState } from 'react';
import { Toast as BootstrapToast } from 'react-bootstrap';

const Toast = ({ message, type, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
      setShow(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, [onClose]);

  useEffect(() => {
    setShow(true);
  }, [message]);

  let bgColor = 'bg-success'; // Default success color
  if (type === 'error') {
    bgColor = 'bg-danger';
  } else if (type === 'info') {
    bgColor = 'bg-primary';
  }

  return (
    <BootstrapToast
      show={show}
      onClose={() => setShow(false)}
      delay={9000}
      autohide
      className={`position-fixed bottom-0 end-0 m-3 text-white ${bgColor} shadow-lg`}
    >
      <BootstrapToast.Body>{message}</BootstrapToast.Body>
    </BootstrapToast>
  );
};

export default Toast;
