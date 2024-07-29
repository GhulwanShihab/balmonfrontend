import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Toast from '../../components/Toast';
import ConfirmationModal from '../../components/ConfirmationModal';
import Loading from '../../components/Loading';

const UpdateInstagram = () => {
    const { userId, token } = useContext(AuthContext);
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        judulInstagram: '',
        tanggalInstagram: '',
        authorInstagram: '',
        editorInstagram: '',
        deskripsiInstagram: [],
        file: null,
        file2: null,
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

    useEffect(() => {
        const fetchInstagram = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:3000/instagrams/${id}`);
                const instagramData = response.data;

                const formattedDeskripsiInstagram = instagramData.deskripsiInstagram.map(item => item.str);

                setFormData({
                    judulInstagram: instagramData.judulInstagram,
                    tanggalInstagram: instagramData.tanggalInstagram,
                    authorInstagram: instagramData.authorInstagram,
                    editorInstagram: instagramData.editorInstagram,
                    file: null,
                    file2: null,
                    deskripsiInstagram: formattedDeskripsiInstagram,
                });
            } catch (error) {
                console.error('Error fetching Instagram post:', error);
                setToast({ show: true, type: 'error', message: 'Gagal memuat Instagram' });
            } finally {
                setLoading(false);
            }
        };

        fetchInstagram();
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

                await axios.put(`http://localhost:3000/instagrams/${id}/${userId}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                });

                navigate('/admin/instagram');
                setToast({ show: true, type: 'success', message: 'Instagram berhasil diperbarui' });
            } catch (error) {
                console.error('Error updating Instagram post:', error);
                setToast({ show: true, type: 'error', message: 'Terjadi kesalahan saat memperbarui Instagram' });
            } finally {
                setLoading(false);
            }
        });

        setModalTitle('Konfirmasi');
        setModalMessage('Apakah Anda yakin ingin memperbarui Instagram ini?');
        setModalShow(true);
    };

    return (
        <>
            {loading && <Loading />}
            <div className="container py-5 mt-5">
                <h1 className="text-center mb-4">Update Instagram Post</h1>
                <form onSubmit={handleSubmit} className="mx-auto p-4 bg-light rounded shadow-sm" style={{ maxWidth: '600px' }}>
                    <div className="mb-3">
                        <label htmlFor="judulInstagram" className="form-label">Judul Instagram</label>
                        <input
                            type="text"
                            id="judulInstagram"
                            name="judulInstagram"
                            value={formData.judulInstagram}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Masukkan judul"
                        />
                        {formErrors.judulInstagram && <p className="text-danger">{formErrors.judulInstagram}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tanggalInstagram" className="form-label">Tanggal Instagram</label>
                        <input
                            type="date"
                            id="tanggalInstagram"
                            name="tanggalInstagram"
                            value={formData.tanggalInstagram}
                            onChange={handleChange}
                            className="form-control"
                        />
                        {formErrors.tanggalInstagram && <p className="text-danger">{formErrors.tanggalInstagram}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="authorInstagram" className="form-label">Author Instagram</label>
                        <input
                            type="text"
                            id="authorInstagram"
                            name="authorInstagram"
                            value={formData.authorInstagram}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Masukkan author"
                        />
                        {formErrors.authorInstagram && <p className="text-danger">{formErrors.authorInstagram}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="editorInstagram" className="form-label">Editor Instagram</label>
                        <input
                            type="text"
                            id="editorInstagram"
                            name="editorInstagram"
                            value={formData.editorInstagram}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Masukkan editor"
                        />
                        {formErrors.editorInstagram && <p className="text-danger">{formErrors.editorInstagram}</p>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Deskripsi Instagram</label>
                        {formData.deskripsiInstagram.map((deskripsi, index) => (
                            <div key={index} className="mb-3">
                                <textarea
                                    name={`deskripsiInstagram-${index}`}
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
                        {formErrors.deskripsiInstagram && <p className="text-danger">{formErrors.deskripsiInstagram}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="file" className="form-label">Pilih Gambar Utama</label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={handleFileChange}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="file2" className="form-label">Pilih Gambar Pendukung</label>
                        <input
                            type="file"
                            id="file2"
                            name="file2"
                            onChange={handleFileChange}
                            className="form-control"
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-success">
                            Update Instagram
                        </button>
                    </div>
                </form>
            </div>

            <Toast
                show={toast.show}
                type={toast.type}
                message={toast.message}
                onClose={() => setToast({ show: false, type: '', message: '' })}
            />

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

export default UpdateInstagram;
