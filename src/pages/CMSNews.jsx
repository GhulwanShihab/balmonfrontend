import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CMSNews = () => {
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const response = await axios.get('/api/news');
    setNews(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await axios.put(`/api/news/${editId}`, { title, content });
      setIsEditing(false);
      setEditId(null);
    } else {
      await axios.post('/api/news', { title, content });
    }
    setTitle('');
    setContent('');
    fetchNews();
  };

  const handleEdit = (newsItem) => {
    setTitle(newsItem.title);
    setContent(newsItem.content);
    setIsEditing(true);
    setEditId(newsItem.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/news/${id}`);
    fetchNews();
  };

  return (
    <div className="container mt-4">
      <h1>CMS News</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Update News' : 'Add News'}
        </button>
      </form>

      <h2 className="mt-4">News List</h2>
      <ul className="list-group">
        {news.map((newsItem) => (
          <li key={newsItem.id} className="list-group-item">
            <h5>{newsItem.title}</h5>
            <p>{newsItem.content}</p>
            <button className="btn btn-warning" onClick={() => handleEdit(newsItem)}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={() => handleDelete(newsItem.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CMSNews;
