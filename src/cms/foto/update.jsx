import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Toast from '../../components/Toast';
import ConfirmationModal from '../../components/ConfirmationModal';
import Loading from '../../components/Loading';

const UpdateGaleriFoto = () => {
    const { userId, token } = useContext(AuthContext);
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        judulFoto: '',
        foto: null,
    });

    const [formErrors, setFormErrors] = useState({
        judulFoto: '',
        foto: '',
    });

    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [loading, setLoading] = useState(false);

    const [toast, setToast] = useState({ show: false, type: '', message: '' });

    useEffect(() => {
        const fetchGaleriFoto = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:3000/galeri-foto/${id}`);
                const galeriFotoData = response.data;

                setFormData({
                    judulFoto: galeriFotoData.judulFoto,
                    foto: null,
                });
            } catch (error) {
                console.error('Error fetching galeri foto:', error);
                setToast({ show: true, type: 'error', message: 'Gagal memuat galeri foto' });
            } finally {
                setLoading(false);
            }
        };

        fetchGaleriFoto();
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
        setFormData({
            ...formData,
            foto: e.target.files[0],
        });
        setFormErrors({
            ...formErrors,
            foto: '',
        });
    };

    const validateForm = () => {
        let valid = true;
        const errors = {
            judulFoto: '',
            foto: '',
        };

        if (!formData.judulFoto.trim()) {
            errors.judulFoto = 'Judul harus diisi';
            valid = false;
        }
        if (!formData.foto) {
            errors.foto = 'Foto harus diunggah';
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
                formDataToSend.append('foto', formData.foto);

                await axios.put(`http://localhost:3000/galeri-foto/${id}/${userId}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                });

                navigate('/admin/galeri-foto');
                setToast({ show: true, type: 'success', message: 'Galeri foto berhasil diperbarui' });
            } catch (error) {
                console.error('Error updating galeri foto:', error);
                setToast({ show: true, type: 'error', message: 'Terjadi kesalahan saat memperbarui galeri foto' });
            } finally {
                setLoading(false);
            }
        });

        setModalTitle('Konfirmasi');
        setModalMessage('Apakah Anda yakin ingin memperbarui galeri foto ini?');
        setModalShow(true);
    };

    return (
        <>
            {loading && <Loading />}
            <div className="container py-5 mt-5">
                <h1 className="text-center mb-4">Update Galeri Foto</h1>
                <form onSubmit={handleSubmit} className="mx-auto p-4 bg-light rounded shadow-sm" style={{ maxWidth: '600px' }}>
                    <div className="mb-3">
                        <label htmlFor="judulFoto" className="form-label">Judul</label>
                        <input
                            type="text"
                            id="judulFoto"
                            name="judulFoto"
                            value={formData.judulFoto}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Masukkan judul"
                        />
                        {formErrors.judulFoto && <p className="text-danger">{formErrors.judulFoto}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="foto" className="form-label">Upload Foto</label>
                        <input
                            type="file"
                            id="foto"
                            name="foto"
                            onChange={handleFileChange}
                            className="form-control"
                        />
                        {formErrors.foto && <p className="text-danger">{formErrors.foto}</p>}
                    </div>
                    <button type="submit" className="btn btn-success w-100">Update Galeri Foto</button>
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

export default UpdateGaleriFoto;
