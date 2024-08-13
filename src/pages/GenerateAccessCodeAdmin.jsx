// src/pages/GenerateAccessCodeAdmin.jsx
import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const GenerateAccessCodeAdmin = () => {
  const [accessCode, setAccessCode] = useState('');
  const [message, setMessage] = useState('');
  const db = getFirestore();

  const generateCode = () => {
    const uniqueCode = Math.random().toString(36).substring(2, 10).toUpperCase();
    setAccessCode(uniqueCode);
  };

  const saveCode = async () => {
    try {
      await addDoc(collection(db, 'accessCodes'), { code: accessCode, used: false });
      setMessage('Code enregistré avec succès');
    } catch (e) {
      setMessage('Erreur lors de l\'enregistrement du code');
    }
  };

  return (
    <div>
      <h2>Générer un Identifiant</h2>
      <button onClick={generateCode}>Générer</button>
      {accessCode && (
        <div>
          <p>Code: {accessCode}</p>
          <button onClick={saveCode}>Enregistrer le Code</button>
        </div>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default GenerateAccessCodeAdmin;
