import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ role }) {
  return (
    <nav className="navbar">
      <h1>Gestion Scolaire</h1>
      <ul>
        {role === 'prof' && <li><Link to="/prof">Tableau Prof</Link></li>}
        {role === 'etudiant' && <li><Link to="/etudiant">Espace Étudiant</Link></li>}
        <li><Link to="/">Déconnexion</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
