import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import Register from './Register';
import DashboardEtudiant from './DashboardEtudiant';
import DashboardProf from './DashboardProf';
import Navbar from './Navbar';

function App() {
  const [role, setRole] = useState(null);

  return (
    <Router>
      <div className="app-container">
        <Navbar role={role} />
        <Routes>
          <Route path="/" element={<LoginForm setRole={setRole} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/etudiant" element={<DashboardEtudiant />} />
          <Route path="/prof" element={<DashboardProf />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

