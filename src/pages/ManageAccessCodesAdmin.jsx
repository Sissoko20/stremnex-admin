// src/pages/ManageAccessCodesAdmin.jsx
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const ManageAccessCodesAdmin = () => {
  const [accessCodes, setAccessCodes] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchAccessCodes = async () => {
      const querySnapshot = await getDocs(collection(db, 'accessCodes'));
      setAccessCodes(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchAccessCodes();
  }, [db]);

  const deleteAccessCode = async (codeId) => {
    await deleteDoc(doc(db, 'accessCodes', codeId));
    setAccessCodes(accessCodes.filter(code => code.id !== codeId));
  };

  return (
    <div>
      <h2>Gérer les Identifiants</h2>
      <ul>
        {accessCodes.map(code => (
          <li key={code.id}>
            {code.code} - {code.used ? 'Utilisé' : 'Disponible'}
            <button onClick={() => deleteAccessCode(code.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageAccessCodesAdmin;
