import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import FloatingMenu from "../components/FloatingMenu";


const PengurusBaru = () => {
    const [penguruses, setPenguruses] = useState({
        kepala: [],
        kasubag: [],
        monev: [],
        penertiban: [],
        pelayanan: []
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/struktur-penguruses`);
            if (!response.ok) {
                throw new Error('Gagal mengambil data pengurus');
            }
            const data = await response.json();
            console.log('Data fetched:', data);
            filterAndSetData(data.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const filterAndSetData = (data) => {
        const filteredData = {
            kepala: data.filter(item => item.tipe === 'kepala'),
            kasubag: data.filter(item => item.tipe === 'kasubag'),
            monev: data.filter(item => item.tipe === 'monev'),
            penertiban: data.filter(item => item.tipe === 'penertiban'),
            pelayanan: data.filter(item => item.tipe === 'pelayanan')
        };
        console.log('Filtered data:', filteredData);
        setPenguruses(filteredData);
    };

    const Section = ({ title, data }) => (
        <Container className="my-4">
            <h1 className="mb-4 border-bottom">{title}</h1>
            <Row className="justify-content-center">
                {data.map(employee => (
                    <Col xs={12} md={6} lg={4} key={employee.id} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={`http://localhost:3000/${employee.foto}`} alt={employee.nama} />
                            <Card.Body>
                                <Card.Title>{employee.nama}</Card.Title>
                                <Card.Text>{employee.jabatan}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );

    return (
        <>
            <Container className="text-center my-4">
            </Container>
            <Section title="KEPALA BALAI MONITOR SFR KELAS II LAMPUNG" data={penguruses.kepala} />
            <Section title="UMUM" data={penguruses.kasubag} />
            <Section title="MONEV SFR DAN APT" data={penguruses.monev} />
            <Section title="PENERTIBAN SFR DAN APT" data={penguruses.penertiban} />
            <Section title="PELAYANAN SFR DAN APT" data={penguruses.pelayanan} />
            <FloatingMenu />
        </>
    );
};

export default PengurusBaru;
