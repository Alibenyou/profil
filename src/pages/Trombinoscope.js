import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 🔹 Ajouté
import ProfileCard from '../components/ProfileCard';

function Trombinoscope() {
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate(); // 🔹 Pour rediriger

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('profiles')) || [];
    setProfiles(stored);
  }, []);
 
  // Fonction pour supprimer un profil
  const handleDelete = (id) => {
    const updated = profiles.filter(profile => profile.id !== id);
    setProfiles(updated);
    localStorage.setItem('profiles', JSON.stringify(updated));
  };

  return (
    <div className="trombinoscope-container">
      <button 
        onClick={() => navigate('/')} 
        style={{
          margin: '20px',
          padding: '10px 15px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        🏠 Accueil
      </button>

      <h1>Liste des profils</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {profiles.length === 0 ? (
          <p>Aucun profil enregistré.</p>
        ) : (
          profiles.map((profile) => (
            <ProfileCard key={profile.id} data={profile} onDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  );
}

export default Trombinoscope;
