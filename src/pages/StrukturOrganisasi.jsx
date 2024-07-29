// src/pages/StrukturOrganisasi.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import kabalmon from '../assets/elon.png';

const StrukturOrganisasi = () => {
  const members = [
    {
      division: 'Ketua',
      people: [
        { name: 'John Doe', position: 'Ketua Umum', image: kabalmon },
        { name: 'Jane Smith', position: 'Ketua Distribusi', image: 'path/to/jane_smith.png' },
      ],
    },
    {
      division: 'Sekretaris',
      people: [
        { name: 'Alice Johnson', position: 'Sekretaris Umum', image: 'path/to/alice_johnson.png' },
        { name: 'Bob Brown', position: 'Sekretaris Distribusi', image: 'path/to/bob_brown.png' },
      ],
    },
    // Add more divisions and people as needed
  ];

  return (
    <div className="container py-4">
      {members.map((group, index) => (
        <div key={index} className="mb-5">
          <h2 className="mb-4">{group.division}</h2>
          <div className="row g-4 justify-content-center">
            {group.people.map((person, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-3 text-center">
                <div
                  className="rounded-circle bg-primary d-flex justify-content-center align-items-center overflow-hidden mx-auto mb-3"
                  style={{ width: '250px', height: '250px' }}
                >
                  <img src={person.image} alt={person.name} className="img-fluid" style={{ maxHeight: '100%' }} />
                </div>
                <h3 className="fw-bold" style={{ fontSize: '1.25rem' }}>{person.name}</h3>
                <p className="text-muted" style={{ fontSize: '1rem' }}>{person.position}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};


export default StrukturOrganisasi;
