import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Toast from '../../components/Toast';
import ConfirmationModal from '../../components/ConfirmationModal';
import Loading from '../../components/Loading';

const CreateInstagram = () => {
    const { userId, token } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        judulInstagram: '',
        tanggalInstagram: '',
        authorInstagram: '',
        editorInstagram: '',
        deskripsiInstagram: [],
        file: null,
        file2: null,
        publishedAt: new Date().toISOString().slice(0, 16),
    });

    const [formErrors, setFormErrors] = useState({
        judulInstagram: '',
        tanggalInstagram: '',
        authorInstagram: '',
        editorInstagram: '',
        deskripsiInstagram: '',
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

    const handleAddDescription = () => {
        const updatedDescriptions = [...formData.deskripsiInstagram, ''];
        setFormData({
            ...formData,
            deskripsiInstagram: updatedDescriptions,
        });
    };

    const handleDescriptionChange = (index, value) => {
        const updatedDescriptions = [...formData.deskripsiInstagram];
        updatedDescriptions[index] = value;
        setFormData({
            ...formData,
            deskripsiInstagram: updatedDescriptions,
        });
    };

    const handleRemoveDescription = (index) => {
        const updatedDescriptions = [...formData.deskripsiInstagram];
        updatedDescriptions.splice(index, 1);
        setFormData({
            ...formData,
            deskripsiInstagram: updatedDescriptions,
        });
    };

    const validateForm = () => {
        let valid = true;
        const errors = {
            judulInstagram: '',
            tanggalInstagram: '',
            authorInstagram: '',
            editorInstagram: '',
            deskripsiInstagram: '',
        };

        if (!formData.judulInstagram.trim()) {
            errors.judulInstagram = 'Judul Instagram harus diisi';
            valid = false;
        }
        if (!formData.tanggalInstagram) {
            errors.tanggalInstagram = 'Tanggal Instagram harus diisi';
            valid = false;
        }
        if (!formData.authorInstagram.trim()) {
            errors.authorInstagram = 'Author Instagram harus diisi';
            valid = false;
        }
        if (!formData.editorInstagram.trim()) {
            errors.editorInstagram = 'Editor Instagram harus diisi';
            valid = false;
        }
        if (formData.deskripsiInstagram.length === 0) {
            errors.deskripsiInstagram = 'Deskripsi Instagram harus diisi';
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
                formDataToSend.append('judulInstagram', formData.judulInstagram);
                formDataToSend.append('tanggalInstagram', formData.tanggalInstagram);
                formDataToSend.append('authorInstagram', formData.authorInstagram);
                formDataToSend.append('editorInstagram', formData.editorInstagram);
                formData.deskripsiInstagram.forEach((deskripsi, index) => {
                    formDataToSend.append(`deskripsiInstagram[${index}]`, deskripsi);
                });
                formDataToSend.append('file', formData.file);
                formDataToSend.append('file2', formData.file2);
                formDataToSend.append('publishedAt', formData.publishedAt);

                await axios.post(`http://localhost:3000/instagrams/${userId}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                });

                navigate('/admin/instagram');
                setToast({ show: true, type: 'success', message: 'Instagram berhasil dibuat' });
            } catch (error) {
                console.error('Error creating Instagram:', error);
                setToast({ show: true, type: 'error', message: 'Terjadi kesalahan saat membuat Instagram' });
            }
            finally {
                setLoading(false);
            }
        });
        setModalTitle('Konfirmasi');
        setModalMessage('Apakah Anda yakin ingin membuat Instagram ini?');
        setModalShow(true);
    };

    return (<>
        {loading && <Loading />}
        <div className="container py-4 mt-5">
            <h1 className="display-4 text-center mb-4">Create Instagram Post</h1>
            <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
                <div className="form-group mb-3">
                    <label htmlFor="judulInstagram">Judul Instagram</label>
                    <input
                        type="text"
                        id="judulInstagram"
                        name="judulInstagram"
                        value={formData.judulInstagram}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Masukkan judul"
                    />
                    {formErrors.judulInstagram && <p className="text-danger mt-1">{formErrors.judulInstagram}</p>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="tanggalInstagram">Tanggal Instagram</label>
                    <input
                        type="date"
                        id="tanggalInstagram"
                        name="tanggalInstagram"
                        value={formData.tanggalInstagram}
                        onChange={handleChange}
                        className="form-control"
                    />
                    {formErrors.tanggalInstagram && <p className="text-danger mt-1">{formErrors.tanggalInstagram}</p>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="authorInstagram">Author Instagram</label>
                    <input
                        type="text"
                        id="authorInstagram"
                        name="authorInstagram"
                        value={formData.authorInstagram}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Masukkan nama author"
                    />
                    {formErrors.authorInstagram && <p className="text-danger mt-1">{formErrors.authorInstagram}</p>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="editorInstagram">Editor Instagram</label>
                    <input
                        type="text"
                        id="editorInstagram"
                        name="editorInstagram"
                        value={formData.editorInstagram}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Masukkan nama editor"
                    />
                    {formErrors.editorInstagram && <p className="text-danger mt-1">{formErrors.editorInstagram}</p>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="deskripsiInstagram">Deskripsi Instagram</label>
                    {formData.deskripsiInstagram.map((deskripsi, index) => (
                        <div key={index} className="mb-2">
                            <textarea
                                id={`deskripsiInstagram${index}`}
                                name="deskripsiInstagram"
                                value={deskripsi}
                                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                                className="form-control mb-2"
                                rows="3"
                                placeholder={`Masukkan deskripsi ${index + 1}`}
                            ></textarea>
                            <button
                                type="button"
                                onClick={() => handleRemoveDescription(index)}
                                className="btn btn-danger"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddDescription}
                        className="btn btn-primary mt-2"
                    >
                        Add Deskripsi
                    </button>
                    {formErrors.deskripsiInstagram && <p className="text-danger mt-1">{formErrors.deskripsiInstagram}</p>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="file">File</label>
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
                    <label htmlFor="file2">File2</label>
                    <input
                        type="file"
                        id="file2"
                        name="file2"
                        onChange={handleFileChange}
                        className="form-control"
                    />
                    {formErrors.file2 && <p className="text-danger mt-1">{formErrors.file2}</p>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="publishedAt">Published At</label>
                    <input
                        type="datetime-local"
                        id="publishedAt"
                        name="publishedAt"
                        value={formData.publishedAt}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
        <Toast show={toast.show} type={toast.type} message={toast.message} onClose={() => setToast({ show: false, type: '', message: '' })} />
        <ConfirmationModal show={modalShow} title={modalTitle} message={modalMessage} onConfirm={modalAction} onCancel={() => setModalShow(false)} />
    </>);
};

export default CreateInstagram;
