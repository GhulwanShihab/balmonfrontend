// src/pages/CMSPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CMSPage = () => {
    const [news, setNews] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [editId, setEditId] = useState(null);

    const fetchNews = async () => {
        const response = await axios.get('/api/news');
        setNews(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editId) {
            await axios.put(`/api/news/${editId}`, { title, content });
        } else {
            await axios.post('/api/news', { title, content });
        }
        setTitle('');
        setContent('');
        setEditId(null);
        fetchNews();
    };

    const handleEdit = (newsItem) => {
        setTitle(newsItem.title);
        setContent(newsItem.content);
        setEditId(newsItem.id);
    };

    const handleDelete = async (id) => {
        await axios.delete(`/api/news/${id}`);
        fetchNews();
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div>
            <h1>CMS Berita</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Judul"
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Konten"
                    required
                />
                <button type="submit">{editId ? 'Edit' : 'Tambah'}</button>
            </form>
            <ul>
                {news.map((newsItem) => (
                    <li key={newsItem.id}>
                        <h2>{newsItem.title}</h2>
                        <button onClick={() => handleEdit(newsItem)}>Edit</button>
                        <button onClick={() => handleDelete(newsItem.id)}>Hapus</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CMSPage;
