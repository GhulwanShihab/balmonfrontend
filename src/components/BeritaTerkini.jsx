import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const BeritaTerkini = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetchDataNews();
  }, []);

  const fetchDataNews = async () => {
    try {
        const response = await fetch(
            "http://localhost:3000/beritas"
        );
        if (!response.ok) {
            throw new Error("Gagal mengambil data berita");
        }
        const data = await response.json();
        const newsData = data.data;
        const lastThreeData = newsData.slice(0, 3); 
        setData(lastThreeData);
    } catch (error) {
        console.error("Error fetching employees:", error);
        setData([]);
    }
  };

  return (
    <div className="bg-light px-3 py-4">
      <div className="text-center mb-4">
        <h3 className="text-primary font-weight-bold">
            BERITA TERKINI
        </h3>
      </div>
      <div className="container">
        <div className="row">
            {datas.map((data, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card shadow-sm h-100">
                        <img
                            className="card-img-top"
                            src={`http://localhost:3000/${data.fotoBerita}`}
                            alt=""
                            style={{ objectFit: 'cover', height: '100%' }}
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-truncate" title={data.judulBerita}>
                                {data.judulBerita}
                            </h5>
                            <p className="card-text mb-2">
                                <strong>Author:</strong> {data.authorBerita}
                            </p>
                            <p className="card-text text-muted">
                                <strong>Tanggal Publish:</strong> {data.tanggalBerita}
                            </p>
                            <Link to={`/berita/${data.id}`} className="mt-auto">
                                <button className="btn btn-primary w-100">
                                    Read more
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default BeritaTerkini;
