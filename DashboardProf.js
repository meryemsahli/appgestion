import React, { useState } from 'react';
import axios from 'axios';

function DashboardProf() {
  const token = localStorage.getItem("token");


  const [cours, setCours] = useState({ nom: '', date: '' });
  const [absence, setAbsence] = useState({ etudiant_id: '', cours_id: '', date: '' });
  const [note, setNote] = useState({ etudiant_id: '', cours_id: '', note: '' });


  const ajouterCours = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3100/cours", cours, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Cours ajouté !");
    } catch (err) {
      alert("Erreur ajout cours");
    }
  };


  const ajouterAbsence = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3100/absences", absence, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Absence enregistrée !");
    } catch (err) {
      alert("Erreur ajout absence");
    }
  };

  const ajouterNote = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3100/notes", note, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Note ajoutée !");
    } catch (err) {
      alert("Erreur ajout note");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Bienvenue Professeur 👨‍🏫</h2>

      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Ajouter un cours</th>
            <th>Ajouter une absence</th>
            <th>Ajouter une note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Formulaire Cours */}
            <td>
              <form onSubmit={ajouterCours}>
                <input type="text" placeholder="Nom du cours" value={cours.nom} onChange={(e) => setCours({ ...cours, nom: e.target.value })} required /><br />
                <input type="date" value={cours.date} onChange={(e) => setCours({ ...cours, date: e.target.value })} required /><br />
                <button type="submit">Ajouter</button>
              </form>
            </td>

            {/* Formulaire Absence */}
            <td>
              <form onSubmit={ajouterAbsence}>
                <input type="text" placeholder="ID étudiant" value={absence.etudiant_id} onChange={(e) => setAbsence({ ...absence, etudiant_id: e.target.value })} required /><br />
                <input type="text" placeholder="ID cours" value={absence.cours_id} onChange={(e) => setAbsence({ ...absence, cours_id: e.target.value })} required /><br />
                <input type="date" value={absence.date} onChange={(e) => setAbsence({ ...absence, date: e.target.value })} required /><br />
                <button type="submit">Ajouter</button>
              </form>
            </td>

            {/* Formulaire Note */}
            <td>
              <form onSubmit={ajouterNote}>
                <input type="text" placeholder="ID étudiant" value={note.etudiant_id} onChange={(e) => setNote({ ...note, etudiant_id: e.target.value })} required /><br />
                <input type="text" placeholder="ID cours" value={note.cours_id} onChange={(e) => setNote({ ...note, cours_id: e.target.value })} required /><br />
                <input type="number" placeholder="Note" value={note.note} onChange={(e) => setNote({ ...note, note: e.target.value })} required /><br />
                <button type="submit">Ajouter</button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DashboardProf;

