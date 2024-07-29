import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import ConfirmationModal from '../../components/ConfirmationModal';
import Loading from '../../components/Loading';

const UpdateGaleriVideo = () => {
    const navigate = useNavigate();
    const { userId, token } = useContext(AuthContext);
    const { id } = useParams();
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

    useEffect(() => {
        const fetchGaleriVideo = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/galeri-videos/${id}`);
                const { title, linkvideo, publishedAt } = response.data;
                setFormData({
                    title,
                    linkvideo,
                    publishedAt,
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchGaleriVideo();
    }, [id]);

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
            errors.title = 'Title is required';
            valid = false;
        }
        if (!formData.url.trim()) {
            errors.linkvideo = 'Video URL is required';
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
        setModalAction(() => async () => {
            try {
                setLoading(true);
                const formDataToSend = new FormData();
                formDataToSend.append('title', formData.title);
                formDataToSend.append('linkvideo', formData.linkvideo);
                formDataToSend.append('publishedAt', formData.publishedAt);
                
                const response = await axios.put(`http://localhost:3000/galeri-videos/${id}/${userId}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                });

                navigate('/admin/merchandise');
            } catch (error) {
                console.error('Error updating merchandise:', error);
            }  
        })
        setModalTitle('Konfirmasi');
        setModalMessage('Apakah Anda yakin ingin mengedit merchandise ini?');
        setModalShow(true);
    };

    return (
        <div className="container py-5 mt-5">
            <h1 className="text-center mb-4">Update Gallery Video</h1>
            <form onSubmit={onSubmit} className="mx-auto p-4 bg-white rounded shadow">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
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
                    <label htmlFor="url" className="form-label">
                        Link Video
                    </label>
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

                <div className="mb-3">
                    <label htmlFor="publishedAt" className="form-label">
                        Published At
                    </label>
                    <input
                        type="date"
                        id="publishedAt"
                        name="publishedAt"
                        value={formData.publishedAt}
                        onChange={handleInputChange}
                        className="form-control"
                    />
                </div>

                <div className="d-grid">
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateGaleriVideo;
