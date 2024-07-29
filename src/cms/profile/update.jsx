import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const UpdateProfile = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { userId, token } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        nama: '',
        posisi: '',
        foto: null,
    });

    const [formErrors, setFormErrors] = useState({
        nama: '',
        posisi: '',
        foto: '',
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/profiles/${id}`);
                const { nama, posisi } = response.data;
                setFormData({
                    nama,
                    posisi,
                    foto: null,
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProfile();
    }, [id]);

    const handleInputChange = (e) => {
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
            nama: '',
            posisi: '',
            foto: '',
        };

        if (!formData.nama.trim()) {
            errors.nama = 'Nama harus diisi';
            valid = false;
        }
        if (!formData.posisi.trim()) {
            errors.posisi = 'Posisi harus diisi';
            valid = false;
        }
        if (!formData.foto) {
            errors.foto = 'Foto harus diunggah';
            valid = false;
        }

        setFormErrors(errors);
        return valid;
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('file', formData.foto);
            formDataToSend.append('nama', formData.nama);
            formDataToSend.append('posisi', formData.posisi);
            formDataToSend.append('publishedAt', new Date().toISOString());

            await axios.put(`http://localhost:3000/profiles/${id}/${userId}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            });

            navigate('/admin/profile');
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Update Profile</h1>
            <form onSubmit={onSubmit} encType="multipart/form-data" className="border p-4 rounded bg-white shadow-sm">
                <div className="mb-3">
                    <label htmlFor="nama" className="form-label">Nama</label>
                    <input
                        type="text"
                        id="nama"
                        name="nama"
                        value={formData.nama}
                        onChange={handleInputChange}
                        className={`form-control ${formErrors.nama ? 'is-invalid' : ''}`}
                        placeholder="Masukkan nama"
                    />
                    {formErrors.nama && <div className="invalid-feedback">{formErrors.nama}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="posisi" className="form-label">Posisi</label>
                    <input
                        type="text"
                        id="posisi"
                        name="posisi"
                        value={formData.posisi}
                        onChange={handleInputChange}
                        className={`form-control ${formErrors.posisi ? 'is-invalid' : ''}`}
                        placeholder="Masukkan posisi"
                    />
                    {formErrors.posisi && <div className="invalid-feedback">{formErrors.posisi}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="foto" className="form-label">Foto</label>
                    <input
                        type="file"
                        id="foto"
                        name="foto"
                        accept="image/*"
                        onChange={handleFileChange}
                        className={`form-control ${formErrors.foto ? 'is-invalid' : ''}`}
                    />
                    {formErrors.foto && <div className="invalid-feedback">{formErrors.foto}</div>}
                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-100"
                >
                    Simpan
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;
