// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5173/api'; // Ganti URL ini sesuai dengan URL backend Anda

// Fungsi untuk mendapatkan konten berdasarkan tipe
export const getContent = async (type) => {
  try {
    const response = await axios.get(`${API_URL}/content/${type}`);
    return response.data;
  } catch (error) {
    console.error('Error getting content:', error);
    throw error;
  }
};

// Fungsi untuk membuat konten baru
export const createContent = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/content`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating content:', error);
    throw error;
  }
};

// Fungsi untuk memperbarui konten berdasarkan tipe
export const updateContent = async (type, data) => {
  try {
    const response = await axios.put(`${API_URL}/content/${type}`, { data }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating content:', error);
    throw error;
  }
};

// Fungsi untuk menghapus konten berdasarkan tipe
export const deleteContent = async (type) => {
  try {
    const response = await axios.delete(`${API_URL}/content/${type}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting content:', error);
    throw error;
  }
};
