import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../AuthContext';
import Toast from '../../components/Toast';
import ConfirmationModal from '../../components/ConfirmationModal';
import Loading from '../../components/Loading';

const VisiMisiTable = () => {
    const { token } = useContext(AuthContext);
    const [visiMisiData, setVisiMisiData] = useState({
        foto: null,
        titleVisi: '',
        titleMisi: '',
        deskripsiVisi: [],
        deskripsiMisi: [],
    });
    const [toast, setToast] = useState({ show: false, type: '', message: '' });
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVisiMisi = async () => {
            try {
                const response = await axios.get('http://localhost:3000/visi-misi', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const data = response.data;
                if (data) {
                    setVisiMisiData({
                        foto: data.foto,
                        titleVisi: data.titleVisi,
                        titleMisi: data.titleMisi,
                        deskripsiVisi: data.deskripsiVisi || [],
                        deskripsiMisi: data.deskripsiMisi || [],
                    });
                }
            } catch (error) {
                console.error('Error fetching Visi Misi data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchVisiMisi();
    }, [token]);

    const handleFileChange = (e) => {
        setVisiMisiData({
            ...visiMisiData,
            foto: e.target.files[0],
        });
    };

    const handleInputChange = (e, index, type) => {
        const value = e.target.value;
        if (type === 'visi') {
            const updatedDeskripsiVisi = [...visiMisiData.deskripsiVisi];
            updatedDeskripsiVisi[index] = value;
            setVisiMisiData({ ...visiMisiData, deskripsiVisi: updatedDeskripsiVisi });
        } else if (type === 'misi') {
            const updatedDeskripsiMisi = [...visiMisiData.deskripsiMisi];
            updatedDeskripsiMisi[index] = value;
            setVisiMisiData({ ...visiMisiData, deskripsiMisi: updatedDeskripsiMisi });
        }
    };

    const addDeskripsiField = (type) => {
        if (type === 'visi') {
            setVisiMisiData({ ...visiMisiData, deskripsiVisi: [...visiMisiData.deskripsiVisi, ''] });
        } else if (type === 'misi') {
            setVisiMisiData({ ...visiMisiData, deskripsiMisi: [...visiMisiData.deskripsiMisi, ''] });
        }
    };

    const removeDeskripsiField = (index, type) => {
        if (type === 'visi') {
            setVisiMisiData({
                ...visiMisiData,
                deskripsiVisi: visiMisiData.deskripsiVisi.filter((_, i) => i !== index)
            });
        } else if (type === 'misi') {
            setVisiMisiData({
                ...visiMisiData,
                deskripsiMisi: visiMisiData.deskripsiMisi.filter((_, i) => i !== index)
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setModalTitle('Confirm Save');
        setModalMessage('Are you sure you want to save these changes?');
        setModalAction(() => async () => {
            try {
                const formDataToSend = new FormData();
                formDataToSend.append('foto', visiMisiData.foto);
                formDataToSend.append('titleVisi', visiMisiData.titleVisi);
                formDataToSend.append('titleMisi', visiMisiData.titleMisi);
                formDataToSend.append('deskripsiVisi', JSON.stringify(visiMisiData.deskripsiVisi));
                formDataToSend.append('deskripsiMisi', JSON.stringify(visiMisiData.deskripsiMisi));
                
                setLoading(true);
                await axios.post('http://localhost:3000/visi-misi', formDataToSend, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setToast({ show: true, type: 'success', message: 'Visi Misi updated successfully!' });
            } catch (error) {
                console.error('Error updating Visi Misi:', error);
                setToast({ show: true, type: 'error', message: 'Failed to update Visi Misi.' });
            } finally {
                setLoading(false);
            }
        });
        setModalShow(true);
    };

    if (loading) return <Loading />;

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center mb-4">Visi & Misi Dashboard</h1>

                <div className="card mb-4">
                    <div className="card-body">
                        <h2 className="card-title">Edit Visi & Misi Page</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="foto" className="form-label">Foto</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="foto"
                                    name="foto"
                                    onChange={handleFileChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="titleVisi" className="form-label">Title Visi</label>
                                <input
                                    type="text"
                                    id="titleVisi"
                                    name="titleVisi"
                                    value={visiMisiData.titleVisi}
                                    onChange={(e) => setVisiMisiData({ ...visiMisiData, titleVisi: e.target.value })}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="deskripsiVisi" className="form-label">Deskripsi Visi</label>
                                {visiMisiData.deskripsiVisi.map((deskripsi, index) => (
                                    <div key={index} className="mb-2">
                                        <textarea
                                            id={`deskripsiVisi-${index}`}
                                            name={`deskripsiVisi-${index}`}
                                            value={deskripsi}
                                            onChange={(e) => handleInputChange(e, index, 'visi')}
                                            className="form-control"
                                            rows="3"
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-danger mt-2"
                                            onClick={() => removeDeskripsiField(index, 'visi')}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="btn btn-secondary mt-2"
                                    onClick={() => addDeskripsiField('visi')}
                                >
                                    Add Visi Description
                                </button>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="titleMisi" className="form-label">Title Misi</label>
                                <input
                                    type="text"
                                    id="titleMisi"
                                    name="titleMisi"
                                    value={visiMisiData.titleMisi}
                                    onChange={(e) => setVisiMisiData({ ...visiMisiData, titleMisi: e.target.value })}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="deskripsiMisi" className="form-label">Deskripsi Misi</label>
                                {visiMisiData.deskripsiMisi.map((deskripsi, index) => (
                                    <div key={index} className="mb-2">
                                        <textarea
                                            id={`deskripsiMisi-${index}`}
                                            name={`deskripsiMisi-${index}`}
                                            value={deskripsi}
                                            onChange={(e) => handleInputChange(e, index, 'misi')}
                                            className="form-control"
                                            rows="3"
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-danger mt-2"
                                            onClick={() => removeDeskripsiField(index, 'misi')}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="btn btn-secondary mt-2"
                                    onClick={() => addDeskripsiField('misi')}
                                >
                                    Add Misi Description
                                </button>
                            </div>
                            <button type="submit" className="btn btn-primary">Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>

            <Toast show={toast.show} type={toast.type} message={toast.message} onClose={() => setToast({ show: false })} />
            <ConfirmationModal
                show={modalShow}
                title={modalTitle}
                message={modalMessage}
                onConfirm={modalAction}
                onCancel={() => setModalShow(false)}
            />
        </>
    );
};

export default VisiMisiTable;
