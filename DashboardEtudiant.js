import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DashboardEtudiant() {
  const [notes, setNotes] = useState([]);
  const [absences, setAbsences] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const etudiantId = JSON.parse(atob(token.split('.')[1])).id; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3100/etudiant/${etudiantId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        setNotes(res.data.notes);
        setAbsences(res.data.absences);
        setLoading(false);
      } catch (err) {
        console.error("Erreur de récupération des données :", err);
      }
    };

    fetchData();
  }, [token, etudiantId]);

  if (loading) return <p>Chargement...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Bienvenue Étudiant 📘</h2>

      <h3>📊 Mes Notes</h3>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', marginBottom: '30px' }}>
        <thead>
          <tr>
            <th>Cours</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {notes.length > 0 ? (
            notes.map((item, index) => (
              <tr key={index}>
                <td>{item.cours}</td>
                <td>{item.note}</td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="2">Aucune note trouvée</td></tr>
          )}
        </tbody>
      </table>

      <h3>📅 Mes Absences</h3>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Cours</th>
            <th>Date d'absence</th>
          </tr>
        </thead>
        <tbody>
          {absences.length > 0 ? (
            absences.map((item, index) => (
              <tr key={index}>
                <td>{item.cours}</td>
                <td>{item.date}</td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="2">Aucune absence trouvée</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardEtudiant;

