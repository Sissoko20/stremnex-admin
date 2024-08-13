// src/pages/DashboardAdmin.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardAdmin = () => {
  return (
    <div>
      <h2>Tableau de bord Admin</h2>
      <ul>
        <li>
          <Link to="/admin/generate-access-code">Générer des Identifiants</Link>
        </li>
        <li>
          <Link to="/admin/manage-users">Gérer les Utilisateurs</Link>
        </li>
        <li>
          <Link to="/admin/manage-access-codes">Gérer les Identifiants</Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardAdmin;
