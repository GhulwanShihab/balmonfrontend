import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Toast from '../../components/Toast';
import Loading from '../../components/Loading';
import ConfirmationModal from '../../components/ConfirmationModal';

const GaleriVideoTable = () => {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [toast, setToast] = useState({ show: false, type: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [toBeDeletedId, setToBeDeletedId] = useState(null);
    const { token } = useContext(AuthContext);
    const [query, setQuery] = useState({
        page: 1,
        limit: 10,
    });
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [query]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/galeri-videos', { params: query });
            setData(response.data.data);
            console.log('Data fetched:', response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setToast({ show: true, type: 'error', message: 'Gagal mengambil merchandise.' });
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        setLoading(true);
        try {
            await axios.delete(`http://localhost:3000/galeri-videos/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchData();
            setToast({ show: true, type: 'success', message: 'Video berhasil dihapus!' });
            setSelectedItem(null);
        } catch (error) {
            console.error('Error deleting item:', error);
        } finally {
            setLoading(false);
            setModalShow(false);
        }
    };

    const handleDeleteConfirmation = (id) => {
        setToBeDeletedId(id);
        setModalShow(true);
    };

    const handleCancelDelete = () => {
        setModalShow(false);
    };

    const handleRowClick = (item) => {
        setSelectedItem(item);
    };

    const handleCloseDetail = () => {
        setSelectedItem(null);
    };

    const handleCreateNew = () => {
        navigate('/admin/galeri-videos/create');
    };

    const handleEdit = (id) => {
        navigate(`/admin/galeri-videos/edit/${id}`);
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
        <div className="container my-4">
            <div className="d-flex justify-content-between mb-4">
                <h2>Gallery Videos</h2>
                <button
                    onClick={handleCreateNew}
                    className="btn btn-primary"
                >
                    Create New
                </button>
            </div>
            <div className="mb-3 d-flex">
                <input
                    type="text"
                    placeholder="Search..."
                    value={query.search || ''}
                    onChange={handleSearchChange}
                    className="form-control me-2"
                />
                <select
                    value={query.sort || ''}
                    onChange={handleSortChange}
                    className="form-select me-2"
                >
                    <option value="">Sort By...</option>
                    <option value="title">Title</option>
                    <option value="publishedAt">Published At</option>
                </select>
                <select
                    value={query.order || ''}
                    onChange={handleOrderChange}
                    className="form-select"
                >
                    <option value="">Order...</option>
                    <option value="ASC">ASC</option>
                    <option value="DESC">DESC</option>
                </select>
            </div>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Title</th>
                        <th>Video URL</th>
                        <th>Published At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <React.Fragment key={item.id}>
                            <tr
                                className={`cursor-pointer ${selectedItem && selectedItem.id === item.id ? 'table-active' : ''}`}
                                onClick={() => handleRowClick(item)}
                            >
                                <td>{item.title}</td>
                                <td>
                                    <a href={item.linkvideo} target="_blank" rel="noopener noreferrer">
                                        {item.linkvideo}
                                    </a>
                                </td>
                                <td>{new Date(item.publishedAt).toLocaleDateString()}</td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteConfirmation(item.id)}
                                        className="btn btn-danger me-2"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleEdit(item.id)}
                                        className="btn btn-warning"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            {selectedItem && selectedItem.id === item.id && (
                                <tr>
                                    <td colSpan="4" className="p-4 bg-light">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h3 className="h5 mb-2">Details</h3>
                                                <p><strong>Title:</strong> {item.title}</p>
                                                <p><strong>Video URL:</strong> {item.linkvideo}</p>
                                                <p><strong>Published At:</strong> {new Date(item.publishedAt).toLocaleString()}</p>
                                            </div>
                                            <button
                                                onClick={handleCloseDetail}
                                                className="btn btn-outline-secondary"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
            <div className="d-flex justify-content-end mt-4">
                <button
                    onClick={() => handlePageChange(query.page - 1)}
                    disabled={query.page <= 1}
                    className="btn btn-outline-secondary me-2"
                >
                    Previous
                </button>
                <button
                    onClick={() => handlePageChange(query.page + 1)}
                    disabled={data.length < query.limit}
                    className="btn btn-outline-secondary"
                >
                    Next
                </button>
            </div>
        </div>
        <ConfirmationModal
            show={modalShow}
            title="Hapus Merchandise"
            message="Apakah Anda yakin ingin menghapus merchandise ini?"
            onConfirm={() => handleDelete(toBeDeletedId)}
            onCancel={handleCancelDelete}
        />
        <Toast
            show={toast.show}
            type={toast.type}
            message={toast.message}
            onClose={() => setToast({ show: false, type: '', message: '' })}
        />
        </>
    );
};

export default GaleriVideoTable;
