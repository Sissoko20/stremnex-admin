import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Importation de Navigate
import LoginAdmin from './pages/LoginAdmin';
import DashboardAdmin from './pages/DashboardAdmin';
import GenerateAccessCodeAdmin from './pages/GenerateAccessCodeAdmin';
import ManageUsersAdmin from './pages/ManageUsersAdmin';
import ManageAccessCodesAdmin from './pages/ManageAccessCodesAdmin';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginAdmin />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <DashboardAdmin />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/generate-access-code" 
          element={
            <PrivateRoute>
              <GenerateAccessCodeAdmin />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/manage-users" 
          element={
            <PrivateRoute>
              <ManageUsersAdmin />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/manage-access-codes" 
          element={
            <PrivateRoute>
              <ManageAccessCodesAdmin />
            </PrivateRoute>
          } 
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
