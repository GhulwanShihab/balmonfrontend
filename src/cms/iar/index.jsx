import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../AuthContext';
import { FaSchool, FaUsers, FaBuilding, FaIndustry, FaBriefcase, FaStore, FaImage } from 'react-icons/fa';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Toast from '../../components/Toast';
import ConfirmationModal from '../../components/ConfirmationModal';
import Loading from '../../components/Loading';

const IARTable = () => {
    const { userId, token } = useContext(AuthContext);
    const [deskripsiData, setDeskripsiData] = useState({ file: null, title: '', deskripsi: '', url: '' });
    const [ikrapData, setIkrapData] = useState({ file: null, title: '', deskripsi: '', url: '' });
    const [perpanjanganData, setPerpanjanganData] = useState({ file: null, title: '' });
    const [toast, setToast] = useState({ show: false, type: '', message: '' });
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDeskripsi = async () => {
            try {
                const response = await axios.get('http://localhost:3000/deskripsi', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const deskripsi = response.data;
                if (deskripsi) {
                    setDeskripsiData({ title: deskripsi.title, deskripsi: deskripsi.deskripsi, url: deskripsi.url });
                }
            } catch (error) {
                console.error('Error fetching IAR data:', error);
            }
        };
        
        const fetchIkrap = async () => {
            try {
                const response = await axios.get('http://localhost:3000/ikrap', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const ikrap = response.data;
                if (ikrap) {
                    setIkrapData({ title: ikrap.title, deskripsi: ikrap.deskripsi, url: ikrap.url });
                }
            } catch (error) {
                console.error('Error fetching IKRAP data:', error);
            }
        };

        const fetchPerpanjangan = async () => {
            try {
                const response = await axios.get('http://localhost:3000/perpanjangan', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const perpanjangan = response.data;
                if (perpanjangan) {
                    setPerpanjanganData({ title: perpanjangan.title });
                }
            } catch (error) {
                console.error('Error fetching Perpanjangan data:', error);
            }
        }

        const fetchAll = async () => {
            try {
                setLoading(true);
                await Promise.all([fetchDeskripsi(), fetchIkrap(), fetchPerpanjangan()]);
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
        setDeskripsiData({
            ...deskripsiData,
            file: e.target.files[0],
        });

        setIkrapData({
            ...ikrapData,
            file: e.target.files[0],
        });

        setPerpanjanganData({
            ...perpanjanganData,
            file: e.target.files[0],
        });
    };

    const handleDeskripsiSubmit = (e) => {
        e.preventDefault();
        setModalTitle('Confirm Save');
        setModalMessage('Are you sure you want to save this IAR?');
        setModalAction(() => async () => {
            try {
                const formDataToSend = new FormData();
                formDataToSend.append('file', deskripsiData.file);
                formDataToSend.append('title', deskripsiData.title);
                formDataToSend.append('deskripsi', deskripsiData.deskripsi);
                formDataToSend.append('url', deskripsiData.url);
                setLoading(true);
                console.log(formDataToSend);
                await axios.post(`http://localhost:3000/deskripsi`, formDataToSend, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setToast({ show: true, type: 'success', message: 'IAR updated successfully!' });
            } catch (error) {
                console.error('Error updating IAR:', error);
                setToast({ show: true, type: 'error', message: 'Failed to update IAR.' });
            }
            finally {
                setLoading(false);
            }
        });
        setModalShow(true);
    };

    const handleIkrapSubmit = (e) => {
        e.preventDefault();
        setModalTitle('Confirm Save');
        setModalMessage('Are you sure you want to save this IKRAP?');
        setModalAction(() => async () => {
            try {
                const formDataToSend = new FormData();
                formDataToSend.append('file', ikrapData.file);
                formDataToSend.append('title', ikrapData.title);
                formDataToSend.append('deskripsi', ikrapData.deskripsi);
                formDataToSend.append('url', ikrapData.url);
                setLoading(true);
                console.log(formDataToSend);
                await axios.post(`http://localhost:3000/ikrap`, formDataToSend, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setToast({ show: true, type: 'success', message: 'IKRAP updated successfully!' });
            } catch (error) {
                console.error('Error updating IKRAP:', error);
                setToast({ show: true, type: 'error', message: 'Failed to update IKRAP.' });
            }
            finally {
                setLoading(false);
            }
        });
        setModalShow(true);
    };

    const handlePerpanjanganSubmit = (e) => {
        e.preventDefault();
        setModalTitle('Confirm Save');
        setModalMessage('Are you sure you want to save this Perpanjangan?');
        setModalAction(() => async () => {
            try {
                const formDataToSend = new FormData();
                formDataToSend.append('file', perpanjanganData.file);
                formDataToSend.append('title', perpanjanganData.title);
                setLoading(true);
                console.log(formDataToSend);
                await axios.post(`http://localhost:3000/perpanjangan`, formDataToSend, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setToast({ show: true, type: 'success', message: 'Perpanjangan updated successfully!' });
            } catch (error) {
                console.error('Error updating Perpanjangan:', error);
                setToast({ show: true, type: 'error', message: 'Failed to update Perpanjangan.' });
            }
            finally {
                setLoading(false);
            }
        });
        setModalShow(true);
    };

    return (
        <>
        
            <div className="container mt-5">
                <h1 className="text-center mb-4">IAR & IKRAP Dashboard</h1>

                <div className="card mb-4">
                    <div className="card-body">
                        <h2 className="card-title">Edit IAR Page</h2>
                        <form onSubmit={handleDeskripsiSubmit}>
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
                                    value={deskripsiData.title}
                                    onChange={(e) => setDeskripsiData({ ...deskripsiData, title: e.target.value })}
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
                                    value={deskripsiData.deskripsi}
                                    onChange={(e) => setDeskripsiData({ ...deskripsiData, deskripsi: e.target.value })}
                                    className="form-control"
                                    rows="5"
                                    placeholder="Enter deskripsi"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="url" className="form-label">
                                    URL Tujuan
                                </label>
                                <input
                                    type="url"
                                    id="url"
                                    name="url"
                                    value={deskripsiData.url}
                                    onChange={(e) => setDeskripsiData({ ...deskripsiData, url: e.target.value })}
                                    className="form-control"
                                    placeholder="Enter URL"
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
                    <div className="card mb-4">
                    <div className="card-body">
                        <h2 className="card-title">Edit IKRAP Page</h2>
                        <form onSubmit={handleIkrapSubmit}>
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
                                    value={ikrapData.title}
                                    onChange={(e) => setIkrapData({ ...ikrapData, title: e.target.value })}
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
                                    value={ikrapData.deskripsi}
                                    onChange={(e) => setIkrapData({ ...ikrapData, deskripsi: e.target.value })}
                                    className="form-control"
                                    rows="5"
                                    placeholder="Enter deskripsi"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="url" className="form-label">
                                    URL Tujuan
                                </label>
                                <input
                                    type="url"
                                    id="url"
                                    name="url"
                                    value={ikrapData.url}
                                    onChange={(e) => setIkrapData({ ...ikrapData, url: e.target.value })}
                                    className="form-control"
                                    placeholder="Enter URL"
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
                    <div className="card mb-4">
                    <div className="card-body">
                        <h2 className="card-title">Edit Perpanjangan Page</h2>
                        <form onSubmit={handlePerpanjanganSubmit}>
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
                                    value={perpanjanganData.title}
                                    onChange={(e) => setPerpanjanganData({ ...perpanjanganData, title: e.target.value })}
                                    className="form-control"
                                    placeholder="Enter title"
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

export default IARTable;
