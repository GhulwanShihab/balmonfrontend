import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Toast from '../../components/Toast';
import ConfirmationModal from '../../components/ConfirmationModal';
import Loading from '../../components/Loading';

const UpdateBerita = () => {
    const { userId, token } = useContext(AuthContext);
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        judulBerita: '',
        tanggalBerita: '',
        authorBerita: '',
        editorBerita: '',
        deskripsiBerita: [],
        file: null,
        file2: null,
    });

    const [formErrors, setFormErrors] = useState({
        judulBerita: '',
        tanggalBerita: '',
        authorBerita: '',
        editorBerita: '',
        deskripsiBerita: '',
    });

    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [loading, setLoading] = useState(false);

    const [toast, setToast] = useState({ show: false, type: '', message: '' });

    useEffect(() => {
        const fetchBerita = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:3000/beritas/${id}`);
                const beritaData = response.data;

                const formattedDeskripsiBerita = beritaData.deskripsiBerita.map(item => item.str);

                setFormData({
                    judulBerita: beritaData.judulBerita,
                    tanggalBerita: beritaData.tanggalBerita,
                    authorBerita: beritaData.authorBerita,
                    editorBerita: beritaData.editorBerita,
                    file: null,
                    file2: null,
                    deskripsiBerita: formattedDeskripsiBerita,
                });
            } catch (error) {
                console.error('Error fetching news article:', error);
                setToast({ show: true, type: 'error', message: 'Gagal memuat berita' });
            } finally {
                setLoading(false);
            }
        };

        fetchBerita();
    }, [id]);

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
        const updatedDescriptions = [...formData.deskripsiBerita, ''];
        setFormData({
            ...formData,
            deskripsiBerita: updatedDescriptions,
        });
    };

    const handleDescriptionChange = (index, value) => {
        const updatedDescriptions = [...formData.deskripsiBerita];
        updatedDescriptions[index] = value;
        setFormData({
            ...formData,
            deskripsiBerita: updatedDescriptions,
        });
    };

    const handleRemoveDescription = (index) => {
        const updatedDescriptions = [...formData.deskripsiBerita];
        updatedDescriptions.splice(index, 1);
        setFormData({
            ...formData,
            deskripsiBerita: updatedDescriptions,
        });
    };

    const validateForm = () => {
        let valid = true;
        const errors = {
            judulBerita: '',
            tanggalBerita: '',
            authorBerita: '',
            editorBerita: '',
            deskripsiBerita: '',
        };

        if (!formData.judulBerita.trim()) {
            errors.judulBerita = 'Judul Berita harus diisi';
            valid = false;
        }
        if (!formData.tanggalBerita) {
            errors.tanggalBerita = 'Tanggal Berita harus diisi';
            valid = false;
        }
        if (!formData.authorBerita.trim()) {
            errors.authorBerita = 'Author Berita harus diisi';
            valid = false;
        }
        if (!formData.editorBerita.trim()) {
            errors.editorBerita = 'Editor Berita harus diisi';
            valid = false;
        }
        if (formData.deskripsiBerita.length === 0) {
            errors.deskripsiBerita = 'Deskripsi Berita harus diisi';
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
                formDataToSend.append('judulBerita', formData.judulBerita);
                formDataToSend.append('tanggalBerita', formData.tanggalBerita);
                formDataToSend.append('authorBerita', formData.authorBerita);
                formDataToSend.append('editorBerita', formData.editorBerita);
                formData.deskripsiBerita.forEach((deskripsi, index) => {
                    formDataToSend.append(`deskripsiBerita[${index}]`, deskripsi);
                });
                formDataToSend.append('file', formData.file);
                formDataToSend.append('file2', formData.file2);
                formDataToSend.append('publishedAt', formData.publishedAt);

                await axios.put(`http://localhost:3000/beritas/${id}/${userId}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                });

                navigate('/admin/berita');
                setToast({ show: true, type: 'success', message: 'Berita berhasil diperbarui' });
            } catch (error) {
                console.error('Error updating news article:', error);
                setToast({ show: true, type: 'error', message: 'Terjadi kesalahan saat memperbarui berita' });
            } finally {
                setLoading(false);
            }
        });

        setModalTitle('Konfirmasi');
        setModalMessage('Apakah Anda yakin ingin memperbarui berita ini?');
        setModalShow(true);
    };

    return (
        <>
            {loading && <Loading />}
            <div className="container py-5 mt-5">
                <h1 className="text-center mb-4">Update News Article</h1>
                <form onSubmit={handleSubmit} className="mx-auto p-4 bg-light rounded shadow-sm" style={{ maxWidth: '600px' }}>
                    <div className="mb-3">
                        <label htmlFor="judulBerita" className="form-label">Judul Berita</label>
                        <input
                            type="text"
                            id="judulBerita"
                            name="judulBerita"
                            value={formData.judulBerita}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Masukkan judul"
                        />
                        {formErrors.judulBerita && <p className="text-danger">{formErrors.judulBerita}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tanggalBerita" className="form-label">Tanggal Berita</label>
                        <input
                            type="date"
                            id="tanggalBerita"
                            name="tanggalBerita"
                            value={formData.tanggalBerita}
                            onChange={handleChange}
                            className="form-control"
                        />
                        {formErrors.tanggalBerita && <p className="text-danger">{formErrors.tanggalBerita}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="authorBerita" className="form-label">Author Berita</label>
                        <input
                            type="text"
                            id="authorBerita"
                            name="authorBerita"
                            value={formData.authorBerita}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Masukkan author"
                        />
                        {formErrors.authorBerita && <p className="text-danger">{formErrors.authorBerita}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="editorBerita" className="form-label">Editor Berita</label>
                        <input
                            type="text"
                            id="editorBerita"
                            name="editorBerita"
                            value={formData.editorBerita}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Masukkan editor"
                        />
                        {formErrors.editorBerita && <p className="text-danger">{formErrors.editorBerita}</p>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Deskripsi Berita</label>
                        {formData.deskripsiBerita.map((deskripsi, index) => (
                            <div key={index} className="mb-3">
                                <textarea
                                    name={`deskripsiBerita-${index}`}
                                    value={deskripsi}
                                    onChange={(e) => handleDescriptionChange(index, e.target.value)}
                                    className="form-control"
                                    placeholder="Masukkan deskripsi"
                                    rows="3"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveDescription(index)}
                                    className="btn btn-danger btn-sm mt-1"
                                >
                                    Hapus
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddDescription}
                            className="btn btn-primary btn-sm"
                        >
                            Tambah Deskripsi
                        </button>
                        {formErrors.deskripsiBerita && <p className="text-danger">{formErrors.deskripsiBerita}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="file" className="form-label">Upload Gambar</label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={handleFileChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="file2" className="form-label">Upload Gambar (Opsional)</label>
                        <input
                            type="file"
                            id="file2"
                            name="file2"
                            onChange={handleFileChange}
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Update Berita</button>
                </form>
            </div>
            <Toast show={toast.show} type={toast.type} message={toast.message} />
            <ConfirmationModal
                show={modalShow}
                title={modalTitle}
                message={modalMessage}
                onHide={() => setModalShow(false)}
                onConfirm={modalAction}
            />
        </>
    );
};

export default UpdateBerita;
