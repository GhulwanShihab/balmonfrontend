import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const StrukturTable = () => {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
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
            const response = await axios.get('http://localhost:3000/struktur-penguruses', { params: query });
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/struktur-penguruses/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchData();
            setSelectedItem(null);
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleRowClick = (item) => {
        setSelectedItem(item);
    };

    const handleCloseDetail = () => {
        setSelectedItem(null);
    };

    const handleCreateNew = () => {
        navigate('/admin/struktur/create');
    };

    const handleEdit = (id) => {
        navigate(`/admin/struktur/edit/${id}`);
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
        <div className="container my-4">
            <div className="d-flex justify-content-between mb-4">
                <h2>Struktur Pengurus</h2>
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
                    <option value="nama">Nama</option>
                    <option value="jabatan">Jabatan</option>
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
                        <th>Gambar</th>
                        <th>Nama</th>
                        <th>Jabatan</th>
                        <th>Published At</th>
                        <th>Tipe</th>
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
                                <td>
                                    <img
                                        src={`http://localhost:3000/${item.foto}`}
                                        alt={item.nama}
                                        className="img-thumbnail"
                                        style={{ width: '50px', height: '50px' }}
                                    />
                                </td>
                                <td>{item.nama}</td>
                                <td>{item.jabatan}</td>
                                <td>{new Date(item.publishedAt).toLocaleDateString()}</td>
                                <td>{item.tipe}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(item.id)}
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
                                    <td colSpan="6" className="p-4 bg-light">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h3 className="h5 mb-2">Details</h3>
                                                <p><strong>Nama:</strong> {item.nama}</p>
                                                <p><strong>Jabatan:</strong> {item.jabatan}</p>
                                                <p><strong>Published At:</strong> {new Date(item.publishedAt).toLocaleString()}</p>
                                                <p><strong>Tipe:</strong> {item.tipe}</p>
                                                <p><strong>Created By:</strong> {item.createdBy.username}</p>
                                                <p><strong>Updated By:</strong> {item.updatedBy.username}</p>
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
    );
};

export default StrukturTable;
