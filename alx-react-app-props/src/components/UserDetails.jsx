import React, { useContext } from 'react';
import UserDataContext from './UserContext';

function UserDetails() {

  const userData = useContext(UserDataContext);
  
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
