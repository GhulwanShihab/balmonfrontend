import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Toast from '../../components/Toast';
import ConfirmationModal from '../../components/ConfirmationModal';
import Loading from '../../components/Loading';

const CreateGaleriFoto = () => {
    const { userId, token } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        judulFoto: '',
        file: null,
        publishedAt: new Date().toISOString().slice(0, 16),
    });

    const [formErrors, setFormErrors] = useState({
        judulFoto: '',
        file: '',
    });

    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [loading, setLoading] = useState(false);

    const [toast, setToast] = useState({ show: false, type: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setFormErrors({
            ...formErrors,
            [name]: '',
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0],
        });
        setFormErrors({
            ...formErrors,
            [name]: '',
        });
    };

    const validateForm = () => {
        let valid = true;
        const errors = {
            judulFoto: '',
            file: '',
        };

        if (!formData.judulFoto.trim()) {
            errors.judulFoto = 'Judul Foto harus diisi';
            valid = false;
        }
        if (!formData.file) {
            errors.file = 'Foto harus diupload';
            valid = false;
        }

        setFormErrors(errors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }
        setModalAction(() => async () => {
            try {
                setLoading(true);
                const formDataToSend = new FormData();
                formDataToSend.append('judulFoto', formData.judulFoto);
                formDataToSend.append('file', formData.file);
                formDataToSend.append('publishedAt', formData.publishedAt);

                await axios.post(`http://localhost:3000/galeri-foto/${userId}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                });

                navigate('/admin/galeri-foto');
                setToast({ show: true, type: 'success', message: 'Galeri Foto berhasil dibuat' });
            } catch (error) {
                console.error('Error creating gallery photo:', error);
                setToast({ show: true, type: 'error', message: 'Terjadi kesalahan saat membuat galeri foto' });
            }
            finally {
                setLoading(false);
            }
        });
        setModalTitle('Konfirmasi');
        setModalMessage('Apakah Anda yakin ingin membuat galeri foto ini?');
        setModalShow(true);
    };

    return (
        <>
            {loading && <Loading />}
            <div className="container py-4 mt-5">
                <h1 className="display-4 text-center mb-4">Create Gallery Photo</h1>
                <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
                    <div className="form-group mb-3">
                        <label htmlFor="judulFoto">Judul Foto</label>
                        <input
                            type="text"
                            id="judulFoto"
                            name="judulFoto"
                            value={formData.judulFoto}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Masukkan judul foto"
                        />
                        {formErrors.judulFoto && <p className="text-danger mt-1">{formErrors.judulFoto}</p>}
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="file">Foto</label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={handleFileChange}
                            className="form-control"
                        />
                        {formErrors.file && <p className="text-danger mt-1">{formErrors.file}</p>}
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="publishedAt">Publish Date</label>
                        <input
                            type="datetime-local"
                            id="publishedAt"
                            name="publishedAt"
                            value={formData.publishedAt}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-success btn-block">Create Galeri Foto</button>
                </form>
            </div>
            <Toast {...toast} onClose={() => setToast({ show: false })} />
            <ConfirmationModal
                show={modalShow}
                title={modalTitle}
                message={modalMessage}
                onConfirm={modalAction}
                onClose={() => setModalShow(false)}
            />
        </>
    );
};

export default CreateGaleriFoto;
