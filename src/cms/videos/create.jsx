import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Loading from '../../components/Loading';
import ConfirmationModal from '../../components/ConfirmationModal';

const CreateGaleriVideo = () => {
    const navigate = useNavigate();
    const { userId, token } = useContext(AuthContext);
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        linkvideo: '',
        publishedAt: new Date().toISOString().slice(0, 16),
    });

    const [formErrors, setFormErrors] = useState({
        title: '',
        linkvideo: '',
        
    });

    const handleInputChange = (e) => {
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

    const validateForm = () => {
        let valid = true;
        const errors = {
            title: '',
            linkvideo: '',
        };

        if (!formData.title.trim()) {
            errors.title = 'Title harus diisi';
            valid = false;
        }
        if (!formData.linkvideo.trim()) {
            errors.linkvideo = 'URL video harus diisi';
            valid = false;
        }

        setFormErrors(errors);
        return valid;
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('title', formData.title);
            formDataToSend.append('linkvideo', formData.linkvideo);

            await axios.post(`http://localhost:3000/galeri-videos/${userId}`, formDataToSend, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });

            navigate('/admin/galeri-videos');
        } catch (error) {
            console.error('Error creating video:', error);
        }
        setModalTitle('Konfirmasi');
        setModalMessage('Apakah Anda yakin ingin membuat video ini?');
        setModalShow(true);
    };

    return (
        <>
        {loading && <Loading/>}
        <div className="container py-4 mt-5">
            <h1 className="text-center mb-4">Create New Gallery Video</h1>
            <form onSubmit={onSubmit} className="mx-auto p-4 bg-light rounded shadow-sm" style={{ maxWidth: '600px' }}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Judul Video</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className={`form-control ${formErrors.title ? 'is-invalid' : ''}`}
                    />
                    {formErrors.title && <div className="invalid-feedback">{formErrors.title}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="url" className="form-label">Link Video</label>
                    <input
                        type="text"
                        id="linkvideo"
                        name="linkvideo"
                        value={formData.linkvideo}
                        onChange={handleInputChange}
                        className={`form-control ${formErrors.linkvideo ? 'is-invalid' : ''}`}
                    />
                    {formErrors.linkvideo && <div className="invalid-feedback">{formErrors.linkvideo}</div>}
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Simpan</button>
                </div>
            </form>
        </div>
        <ConfirmationModal
                show={modalShow}
                title={modalTitle}
                message={modalMessage}
                onConfirm={() => {
                    if (modalAction) {
                        modalAction();
                    }
                    setModalShow(false);
                }}
                onCancel={() => setModalShow(false)}
            />
        </>
    );
};

export default CreateGaleriVideo;
