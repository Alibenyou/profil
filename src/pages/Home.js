import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Bienvenue dans le Trombinoscope</h1>
        <p>Visualisez et gérez vos profils facilement</p>
        <div className="home-buttons">
          <Link to="/trombinoscope" className="home-btn">Voir le trombinoscope</Link>
          <Link to="/add" className="home-btn">Ajouter une personne</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
