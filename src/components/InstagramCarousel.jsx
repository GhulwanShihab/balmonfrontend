import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import './InstagramSection.css'; // Tambahkan file CSS terpisah

const InstagramSection = () => {
    const [datas, setData] = useState([]);

    useEffect(() => {
        fetchDataInstagram();
    }, []);

    const fetchDataInstagram = async () => {
        try {
            const response = await fetch("http://localhost:3000/instagrams");
            if (!response.ok) {
                throw new Error("Failed to fetch Instagram data");
            }
            const data = await response.json();
            const instagramData = data.data;
            const latestInstagramData = instagramData.slice(0, 5); // Limit to 5 latest posts
            setData(latestInstagramData);
        } catch (error) {
            console.error("Error fetching Instagram data:", error);
            setData([]);
        }
    };

    return (
        <div className="instagram-section">
            <Carousel
                controls={true}
                indicators={true}
                nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
                prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
            >
                {datas.map((data, index) => (
                    <Carousel.Item key={index} className="instagram-carousel-item">
                        <img
                            className="d-block w-100 instagram-carousel-image"
                            src={`http://localhost:3000/${data.fotoInstagram}`}
                            alt={`Slide ${index}`}
                        />
                        <Carousel.Caption className="instagram-carousel-caption">
                            <div className="instagram-caption-background">
                                <small>{data.tanggalInstagram}</small>
                                <h5 className="instagram-carousel-title">
                                    <Link to={`/instagram/${data.id}`} className="text-white">
                                        {data.judulInstagram}
                                    </Link>
                                </h5>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default InstagramSection;
