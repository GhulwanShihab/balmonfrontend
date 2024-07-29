import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginModal from '../components/LoginModal';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modal, setModal] = useState({ show: false, title: '', message: '' });
  const [consentGiven, setConsentGiven] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          await axios.get('http://localhost:3000/auth/validate-token', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          navigate('/admin');
        } catch (error) {
          console.error('Token verification failed:', error);
        }
      }
    };
    checkToken();
  }, [navigate]);

  const handleCloseModal = () => {
    setModal({ show: false, title: '', message: '' });
    if (modal.title === 'Login Successful') {
      navigate('/admin');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consentGiven) {
      setModal({
        show: true,
        title: 'Consent Required',
        message: 'Please consent to storing your data.'
      });
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/auth/login', JSON.stringify({
        email,
        password
      }), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('welcomeShown', 'false');
      setModal({
        show: true,
        title: 'Login Successful',
        message: 'You have successfully logged in.'
      });
      if (consentGiven) {
        localStorage.setItem('consentGiven', 'true');
      }
    } catch (error) {
      setModal({
        show: true,
        title: 'Login Error',
        message: 'Invalid email or password. Please try again.'
      });
    }
  };

  return (
    <>
      <div className={styles.loginContainer}>
        <div className="col-md-6 d-none d-md-block">
          <img
            src="https://placehold.co/800x/667fff/ffffff.png?text=CMS+BALMON+LAMPUNG&font=Montserrat"
            alt="Placeholder Image"
            className={styles.loginImage}
          />
        </div>
        <div className={`col-md-6 ${styles.loginFormContainer}`}>
          <h1 className={styles.loginTitle}>Login</h1>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.formInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.formLabel}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className={styles.formInput}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="checkbox"
                id="consent"
                name="consent"
                className={styles.formCheckbox}
                checked={consentGiven}
                onChange={(e) => setConsentGiven(e.target.checked)}
              />
              <label htmlFor="consent">
                I consent to storing my data
              </label>
            </div>
            <div className="text-end mb-3">
              <a href="#" className="text-primary">Forgot Password?</a>
            </div>
            <button type="submit" className={styles.formButton}>
              Login
            </button>
          </form>
        </div>
      </div>
      <LoginModal
        show={modal.show}
        handleClose={handleCloseModal}
        title={modal.title}
        message={modal.message}
      />
    </>
  );
};

export default Login;
