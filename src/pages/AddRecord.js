import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddRecord.css';

function AddRecord() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [photo, setPhoto] = useState(null);
  const [position, setPosition] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // 📌 Méthode pour gérer le changement de photo
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // ✅ Vérification de la taille : 3 Mo max
      if (file.size > 3 * 1024 * 1024) {
        setError("⚠️ L'image est trop volumineuse (max: 3 Mo)");
        setPhoto(null); // On réinitialise la photo pour éviter l'affichage
        return;
      }
      setError('');
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !photo) {
      alert('Veuillez remplir le nom et choisir une photo.');
      return;
    }

    const newProfile = {
      id: Date.now(),
      name,
      position,
      role,
      photo,
    };
    
    const existing = JSON.parse(localStorage.getItem('profiles')) || [];
    existing.push(newProfile);

    try {
      localStorage.setItem('profiles', JSON.stringify(existing));
      setMessage('Profil ajouté avec succès !');
      setTimeout(() => navigate('/trombinoscope'), 1000);
    } catch (error) {
      alert("L'ajout a échoué. Espace LocalStorage dépassé.");
    }
  };

  return (
    <div className="add-record-container">
      <h2>Ajouter une personne</h2>
      <form onSubmit={handleSubmit} className="add-record-form">
        <label>Nom :</label>
        <input
          type="text"
          placeholder="Entrez le nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Fonction / Rôle :</label>
        <input
          type="text"
          placeholder="ex: Étudiant, Professeur..."
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <label>Photo :</label>
        <input type="file" accept="image/*" onChange={handlePhotoChange} required />
        
        {/* Affichage de l'erreur si la taille dépasse */}
        {error && <p className="error-message">{error}</p>}

        {photo && (
          <div className="photo-preview">
            <img src={photo} alt="Aperçu" />
          </div>
        )}

        <button type="submit">Ajouter</button>
        
        <button type="button" className="cancel-btn" onClick={() => navigate('/trombinoscope')}>
          Voir Trombinoscope
        </button>

        <button type="button" className="home-btn" onClick={() => navigate('/')}>
          ⬅️ Accueil
        </button>

        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Poste ou rôle"
        />

        {message && <p className="success-message">{message}</p>}
      </form>
    </div>
  );
}

export default AddRecord;
