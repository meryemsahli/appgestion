import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('etudiant');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3100/register', {
        username,
        password,
        role,
      });
      alert('✅ Compte créé avec succès !');
      navigate('/'); 
    } catch (error) {
      console.error(error);
      alert('❌ Erreur lors de la création du compte');
    }
  };

  return (
    <div className="register-page">
      <h2>Créer un compte</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br /><br />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="etudiant">Étudiant</option>
          <option value="prof">Professeur</option>
        </select><br /><br />

        <button type="submit">Créer le compte</button>
      </form>
    </div>
  );
}

export default Register;
