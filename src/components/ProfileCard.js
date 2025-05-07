import React from 'react';
import './ProfileCard.css';
function ProfileCard({ data, onDelete }) {
  return (
    <div className="profile-card">
      <img src={data.photo} alt={data.name} />
      <h3>{data.name}</h3>
      <p>{data.position}</p>
      <button className="delete-btn" onClick={() => onDelete(data.id)}>
        Supprimer
      </button>
    </div>
  );
}

export default ProfileCard;
