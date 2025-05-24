import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm({ setRole }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('etudiant');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3100/login", {
        username,
        password
      });

      const { token, role } = response.data;

      console.log("Rôle renvoyé par le backend :", role);
      console.log("Rôle sélectionné dans le menu :", selectedRole);


      if (role !== selectedRole) {
        alert("Erreur : le rôle sélectionné ne correspond pas à celui enregistré !");
       return;
      }

      localStorage.setItem("token", token);
      setRole(role);

      navigate(role === "prof" ? "/prof" : "/etudiant");
    } catch (err) {
      alert("Identifiants ou rôle invalide !");
    }
   
  };
  


  return (
    <div className="login-form">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Identifiant"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
  <option value="etudiant">Étudiant</option>
  <option value="prof">Professeur</option>
</select>


        <button type="submit">Se connecter</button>
      </form>

      <p>Pas de compte ? <a href="/register">Créer un compte</a></p>
    </div>
  );
}

export default LoginForm;