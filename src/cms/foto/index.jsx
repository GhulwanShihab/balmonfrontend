import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import ConfirmationModal from '../../components/ConfirmationModal';
import Toast from '../../components/Toast';
import Loading from '../../components/Loading';

const GaleriFotoTable = () => {
    const [galeriFoto, setGaleriFoto] = useState([]);
    const { token } = useContext(AuthContext);
    const [selectedFoto, setSelectedFoto] = useState(null);
    const [toast, setToast] = useState({ show: false, type: '', message: '' });
    const [modalShow, setModalShow] = useState(false);
    const [toBeDeletedId, setToBeDeletedId] = useState(null);
    const [loading, setLoading] = useState(true);

    const [query, setQuery] = useState({
        page: 1,
        limit: 10,
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGaleriFoto = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:3000/galeri-foto', { params: query });
                setGaleriFoto(response.data.data);
            } catch (error) {
                console.error('Error fetching galeri foto:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchGaleriFoto();
    }, [query]);

    const handleDelete = async (id) => {
        try {
            setLoading(true);
            await axios.delete(`http://localhost:3000/galeri-foto/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const response = await axios.get('http://localhost:3000/galeri-foto', { params: query });
            setGaleriFoto(response.data.data);
            setToast({ show: true, type: 'success', message: 'Foto berhasil dihapus!' });
            setModalShow(false);
        } catch (error) {
            console.error('Error deleting foto:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteConfirmation = (id) => {
        setToBeDeletedId(id);
        setModalShow(true);
    };

    const handleCancelDelete = () => {
        setModalShow(false);
    };

    const handleRowClick = (foto) => {
        setSelectedFoto(foto);
    };

    const handleCloseDetail = () => {
        setSelectedFoto(null);
    };

    const handleCreateNew = () => {
        navigate('/admin/galeri-foto/create');
    };

    const handleEdit = (id) => {
        navigate(`/admin/galeri-foto/edit/${id}`);
    };

    const handleSearchChange = (event) => {
        setQuery({ ...query, search: event.target.value });
    };

    const handleSortChange = (event) => {
        setQuery({ ...query, sort: event.target.value });
    };

    const handleOrderChange = (event) => {
        setQuery({ ...query, order: event.target.value });
    };

    const handlePageChange = (newPage) => {
        setQuery({ ...query, page: newPage });
    };

    return (
        <>
            {loading && <Loading />}
            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="h2">Galeri Foto</h2>
                    <button
                        onClick={handleCreateNew}
                        className="btn btn-primary"
                    >
                        Buat Baru
                    </button>
                </div>
                <div className="mb-4 d-flex align-items-center">
                    <input
                        type="text"
                        placeholder="Cari..."
                        value={query.search || ''}
                        onChange={handleSearchChange}
                        className="form-control me-2"
                    />
                    <select
                        value={query.sort || ''}
                        onChange={handleSortChange}
                        className="form-select me-2"
                    >
                        <option value="">Urutkan Berdasarkan...</option>
                        <option value="judulFoto">Judul</option>
                        <option value="tanggalFoto">Tanggal</option>
                    </select>
                    <select
                        value={query.order || ''}
                        onChange={handleOrderChange}
                        className="form-select"
                    >
                        <option value="">Urutan...</option>
                        <option value="ASC">ASC</option>
                        <option value="DESC">DESC</option>
                    </select>
                </div>
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Judul</th>
                            <th scope="col">Tanggal</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {galeriFoto.map((foto) => (
                            <React.Fragment key={foto.id}>
                                <tr onClick={() => handleRowClick(foto)}>
                                    <td>{foto.judulFoto}</td>
                                    <td>{new Date(foto.tanggalFoto).toLocaleDateString()}</td>
                                    <td>
                                        <img src={`http://localhost:3000/${foto.foto}`} alt="foto" className="img-thumbnail" style={{ width: '50px', height: '50px' }} />
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteConfirmation(foto.id)}
                                            className="btn btn-danger btn-sm"
                                        >
                                            Hapus
                                        </button>
                                        <button
                                            onClick={() => handleEdit(foto.id)}
                                            className="btn btn-warning btn-sm ms-2"
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                                {selectedFoto && selectedFoto.id === foto.id && (
                                    <tr>
                                        <td colSpan="4" className="p-4 bg-light">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h3 className="h5">Detail</h3>
                                                    <p><strong>Judul:</strong> {foto.judulFoto}</p>
                                                    <p><strong>Tanggal:</strong> {new Date(foto.tanggalFoto).toLocaleString()}</p>
                                                </div>
                                                <button
                                                    onClick={handleCloseDetail}
                                                    className="btn btn-link text-muted"
                                                >
                                                    Tutup
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
                <div className="d-flex justify-content-between mt-4">
                    <button
                        onClick={() => handlePageChange(query.page - 1)}
                        disabled={query.page <= 1}
                        className="btn btn-secondary"
                    >
                        Sebelumnya
                    </button>
                    <button
                        onClick={() => handlePageChange(query.page + 1)}
                        disabled={galeriFoto.length < query.limit}
                        className="btn btn-secondary"
                    >
                        Berikutnya
                    </button>
                </div>
                <ConfirmationModal
                    show={modalShow}
                    title="Hapus Foto"
                    message="Apakah Anda yakin ingin menghapus foto ini?"
                    onConfirm={() => handleDelete(toBeDeletedId)}
                    onCancel={handleCancelDelete}
                />
                <Toast
                    show={toast.show}
                    type={toast.type}
                    message={toast.message}
                    onClose={() => setToast({ show: false, type: '', message: '' })}
                />
            </div>
        </>
    );
};

export default GaleriFotoTable;
