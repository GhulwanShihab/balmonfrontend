import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const CreateStrukturPengurus = () => {
    const navigate = useNavigate();
    const { userId, token } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        nama: '',
        jabatan: '',
        tipe: 'kepala',
        file: null,
        publishedAt: new Date().toISOString().slice(0, 16),
    });

    const [formErrors, setFormErrors] = useState({
        nama: '',
        jabatan: '',
        file: '',
    });

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
            file: e.target.files[0],
        });
        setFormErrors({
            ...formErrors,
            file: '',
        });
    };

    const validateForm = () => {
        let valid = true;
        const errors = {
            nama: '',
            jabatan: '',
            file: '',
        };

        if (!formData.nama.trim()) {
            errors.nama = 'Nama harus diisi';
            valid = false;
        }
        if (!formData.jabatan.trim()) {
            errors.jabatan = 'Jabatan harus diisi';
            valid = false;
        }
        if (!formData.file) {
            errors.file = 'Foto harus diunggah';
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
            formDataToSend.append('file', formData.file);
            formDataToSend.append('nama', formData.nama);
            formDataToSend.append('jabatan', formData.jabatan);
            formDataToSend.append('publishedAt', formData.publishedAt);
            formDataToSend.append('tipe', formData.tipe);

            

            await axios.post(`http://localhost:3000/struktur-penguruses/${userId}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            });

            navigate('/admin/struktur');
        } catch (error) {
            console.error('Error creating data:', error);
        }
    };

    return (
        <div className="container py-4 mt-5">
            <h1 className="text-center mb-4">Create New Struktur Pengurus</h1>
            <form onSubmit={onSubmit} className="mx-auto p-4 bg-light rounded shadow-sm" style={{ maxWidth: '600px' }}>
                <div className="mb-3">
                    <label htmlFor="nama" className="form-label">Nama</label>
                    <input
                        type="text"
                        id="nama"
                        name="nama"
                        value={formData.nama}
                        onChange={handleInputChange}
                        className={`form-control ${formErrors.nama ? 'is-invalid' : ''}`}
                    />
                    {formErrors.nama && <div className="invalid-feedback">{formErrors.nama}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="jabatan" className="form-label">Jabatan</label>
                    <input
                        type="text"
                        id="jabatan"
                        name="jabatan"
                        value={formData.jabatan}
                        onChange={handleInputChange}
                        className={`form-control ${formErrors.jabatan ? 'is-invalid' : ''}`}
                    />
                    {formErrors.jabatan && <div className="invalid-feedback">{formErrors.jabatan}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="tipe" className="form-label">Tipe</label>
                    <select
                        id="tipe"
                        name="tipe"
                        value={formData.tipe}
                        onChange={handleInputChange}
                        className="form-control"
                    >
                        <option value="kepala">Kepala Balmon</option>
                        <option value="kasubag">Umum</option>
                        <option value="monev">Monev</option>
                        <option value="penertiban">Penertiban</option>
                        <option value="pelayanan">Pelayanan</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="file" className="form-label">Foto</label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className={`form-control ${formErrors.file ? 'is-invalid' : ''}`}
                    />
                    {formErrors.file && <div className="invalid-feedback">{formErrors.file}</div>}
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Simpan</button>
                </div>
            </form>
        </div>
    );
};

export default CreateStrukturPengurus;
