// src/pages/ManageUsersAdmin.jsx
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const ManageUsersAdmin = () => {
  const [users, setUsers] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      setUsers(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchUsers();
  }, [db]);

  const deleteUser = async (userId) => {
    await deleteDoc(doc(db, 'users', userId));
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div>
      <h2>Gérer les Utilisateurs</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.email}
            <button onClick={() => deleteUser(user.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsersAdmin;
