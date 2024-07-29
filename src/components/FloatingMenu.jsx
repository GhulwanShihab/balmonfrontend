import React, { useState } from "react";
import { BsFacebook, BsInstagram, BsYoutube, BsTiktok } from 'react-icons/bs';
import { MdArrowForwardIos } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';

const FloatingMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="position-fixed d-flex align-items-center" style={{ top: '50%', transform: 'translateY(-50%)', right: 0, zIndex: 1050 }}>
      {/* Indicator element */}
      <div
        className="position-relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-primary d-flex align-items-center justify-content-center rounded-end" style={{ width: '2.5rem', height: '2.5rem', transition: 'transform 0.3s ease-in-out' }}>
          <MdArrowForwardIos
            className="text-white"
            style={{
              width: '1.5rem',
              height: '1.5rem',
              transition: 'transform 0.3s ease-in-out',
              transform: isHovered ? 'translateX(-1rem)' : 'translateX(0)'
            }}
          />
        </div>
        <div
          className={`position-absolute top-50 translate-middle-y bg-dark px-2 py-3 rounded-start shadow ${isHovered ? 'd-block' : 'd-none'}`}
          style={{ width: '3.5rem', transition: 'transform 0.3s ease-in-out', right: '100%' }}
        >
          <div className="mb-3">
            <a
              href="https://www.facebook.com/profile.php?id=100064564037361"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white d-flex align-items-center justify-content-center"
              style={{ width: '2rem', height: '2rem' }}
            >
              <BsFacebook />
            </a>
          </div>
          <div className="mb-3">
            <a
              href="https://instagram.com/okoce.indonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white d-flex align-items-center justify-content-center"
              style={{ width: '2rem', height: '2rem' }}
            >
              <BsInstagram />
            </a>
          </div>
          <div className="mb-3">
            <a
              href="https://www.tiktok.com/@okoceindonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white d-flex align-items-center justify-content-center"
              style={{ width: '2rem', height: '2rem' }}
            >
              <BsTiktok />
            </a>
          </div>
          <div>
            <a
              href="https://www.youtube.com/channel/UCrXYetY5iBgnFnNKCVYzihw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white d-flex align-items-center justify-content-center"
              style={{ width: '2rem', height: '2rem' }}
            >
              <BsYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;
