import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../AuthContext';
import { FaSchool, FaUsers, FaBuilding, FaIndustry, FaBriefcase, FaStore, FaImage } from 'react-icons/fa';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Toast from '../../components/Toast';
import ConfirmationModal from '../../components/ConfirmationModal';
import Loading from '../../components/Loading';

const CMSHome = () => {
    const { userId, token } = useContext(AuthContext);
    const [aboutData, setAboutData] = useState({ file: null, title: '', deskripsi: '' });
    const [bannerData, setBannerData] = useState([]);
    const [newBannerImage, setNewBannerImage] = useState(null);
    const [newBannerPreview, setNewBannerPreview] = useState(null);
    const [toast, setToast] = useState({ show: false, type: '', message: '' });
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const response = await axios.get('http://localhost:3000/about', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const about = response.data;
                if (about) {
                    setAboutData({ title: about.title, deskripsi: about.deskripsi });
                }
            } catch (error) {
                console.error('Error fetching about data:', error);
            }
        };

        const fetchBanners = async () => {
            try {
                const response = await axios.get('http://localhost:3000/banners/', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setBannerData(response.data);
            } catch (error) {
                console.error('Error fetching banner data:', error);
            }
        };

        const fetchAll = async () => {
            try {
                setLoading(true);
                await Promise.all([fetchAbout(), fetchBanners()]);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchAll();
    }, [token]);

    const handleFileChange = (e) => {
        setAboutData({
            ...aboutData,
            file: e.target.files[0],
        });
    };

    const handleAboutSubmit = (e) => {
        e.preventDefault();
        setModalTitle('Confirm Save');
        setModalMessage('Are you sure you want to save this about?');
        setModalAction(() => async () => {
            try {
                const formDataToSend = new FormData();
                formDataToSend.append('file', aboutData.file);
                formDataToSend.append('title', aboutData.title);
                formDataToSend.append('deskripsi', aboutData.deskripsi);
                setLoading(true);
                console.log(formDataToSend);
                await axios.post(`http://localhost:3000/about`, formDataToSend, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setToast({ show: true, type: 'success', message: 'About updated successfully!' });
            } catch (error) {
                console.error('Error updating about:', error);
                setToast({ show: true, type: 'error', message: 'Failed to update about.' });
            }
            finally {
                setLoading(false);
            }
        });
        setModalShow(true);
    };

    const handleBannerCreate = () => {
        setModalTitle('Confirm Create');
        setModalMessage('Are you sure you want to create this banner?');
        setModalAction(() => async () => {
            const formData = new FormData();
            formData.append('file', newBannerImage);
            setLoading(true);
            try {
                console.log(formData);
                const response = await axios.post(`http://localhost:3000/banners/${userId}`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    },
                });
                setBannerData([...bannerData, response.data]);
                setNewBannerImage(null);
                setNewBannerPreview(null);
                setToast({ show: true, type: 'success', message: 'Banner created successfully!' });
            } catch (error) {
                console.error('Error creating banner:', error);
                setToast({ show: true, type: 'error', message: 'Failed to create banner.' });
            }
            finally {
                setLoading(false);
            }
        });
        setModalShow(true);
    };

    const handleBannerDelete = (bannerId) => {
        setModalTitle('Confirm Delete');
        setModalMessage('Are you sure you want to delete this banner?');
        setModalAction(() => async () => {
            setLoading(true);
            try {
                await axios.delete(`http://localhost:3000/banners/${bannerId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setBannerData(bannerData.filter((banner) => banner.id !== bannerId));
                setToast({ show: true, type: 'success', message: 'Banner deleted successfully!' });
            } catch (error) {
                console.error('Error deleting banner:', error);
                setToast({ show: true, type: 'error', message: 'Failed to delete banner.' });
            }
            finally {
                setLoading(false);
            }
        });
        setModalShow(true);
    };

    const handleOnDragEnd = async (result) => {
        if (!result.destination) return;

        const items = Array.from(bannerData);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setBannerData(items);
        setLoading(true);
        try {
            await axios.put('http://localhost:3000/banners/reorder', { banners: items }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setToast({ show: true, type: 'success', message: 'Banners reordered successfully!' });
        } catch (error) {
            console.error('Error reordering banners:', error);
            setToast({ show: true, type: 'error', message: 'Failed to reorder banners.' });
        } finally {
            setLoading(false);
        }
    };

    const getIcon = (nama) => {
        switch (nama) {
            case 'pendidikan':
                return <FaSchool className="text-primary" size={40} />;
            case 'penggerak':
                return <FaUsers className="text-success" size={40} />;
            case 'pemerintah':
                return <FaBuilding className="text-danger" size={40} />;
            case 'swasta':
                return <FaIndustry className="text-warning" size={40} />;
            case 'usaha':
                return <FaBriefcase className="text-info" size={40} />;
            case 'umkm':
                return <FaStore className="text-secondary" size={40} />;
            default:
                return <FaUsers size={40} />;
        }
    };

    const handleNewBannerImageChange = (e) => {
        const file = e.target.files[0];
        setNewBannerImage(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewBannerPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            {loading && <Loading />}
            <div className="container mt-5">
                <h1 className="text-center mb-4">Admin Dashboard</h1>

                <div className="card mb-4">
                    <div className="card-body">
                        <h2 className="card-title">Edit Home Page</h2>
                        <form onSubmit={handleAboutSubmit}>
                            <div className="mb-3">
                                <label htmlFor="foto" className="form-label">
                                    Foto
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="file"
                                    name="file"
                                    onChange={handleFileChange}
                                    className="form-control"
                                    placeholder="Enter foto"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={aboutData.title}
                                    onChange={(e) => setAboutData({ ...aboutData, title: e.target.value })}
                                    className="form-control"
                                    placeholder="Enter title"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="deskripsi" className="form-label">
                                    Deskripsi
                                </label>
                                <textarea
                                    id="deskripsi"
                                    name="deskripsi"
                                    value={aboutData.deskripsi}
                                    onChange={(e) => setAboutData({ ...aboutData, deskripsi: e.target.value })}
                                    className="form-control"
                                    rows="5"
                                    placeholder="Enter deskripsi"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Manage Banners</h2>
                        <div className="row mb-4">
                            <div className="col-12 col-md-6">
                                <div className="d-flex flex-column align-items-center">
                                    {newBannerPreview ? (
                                        <div className="mb-3">
                                            <img src={newBannerPreview} alt="New Banner Preview" className="img-fluid rounded mb-3" style={{ maxWidth: '300px' }} />
                                        </div>
                                    ) : (
                                        <div className="mb-3">
                                            <p className="text-muted">No image selected</p>
                                        </div>
                                    )}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleNewBannerImageChange}
                                        className="form-control"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleBannerCreate}
                                        className="btn btn-success mt-3"
                                    >
                                        Create Banner
                                    </button>
                                </div>
                            </div>
                        </div>

                        {bannerData.length === 0 ? (
                            <p className="text-center text-muted">No banners available</p>
                        ) : (
                            <DragDropContext onDragEnd={handleOnDragEnd}>
                                <Droppable droppableId="droppable">
                                    {(provided) => (
                                        <ul
                                            className="list-group"
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            {bannerData.map((banner, index) => (
                                                <Draggable key={banner.id} draggableId={banner.id.toString()} index={index}>
                                                    {(provided) => (
                                                        <li
                                                            className="list-group-item d-flex justify-content-between align-items-center mb-2"
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src={`http://localhost:3000/${banner.foto}`}
                                                                    alt={banner.title}
                                                                    className="img-thumbnail me-3"
                                                                    style={{ width: '100px', height: 'auto' }}
                                                                />
                                                                <span>{banner.title}</span>
                                                            </div>
                                                            <button
                                                                type="button"
                                                                onClick={() => handleBannerDelete(banner.id)}
                                                                className="btn btn-danger"
                                                            >
                                                                Delete
                                                            </button>
                                                        </li>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </ul>
                                    )}
                                </Droppable>
                            </DragDropContext>
                        )}
                    </div>
                </div>
            </div>

            {toast.show && <Toast type={toast.type} message={toast.message} />}
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

export default CMSHome;
