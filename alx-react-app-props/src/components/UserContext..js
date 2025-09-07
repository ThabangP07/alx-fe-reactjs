import React, { createContext } from 'react'

const userDataContext = createContext({});

const UserContext = (userData) => {
  return (
    <userDataContext.Provider value={userData}>
      {userData.children}
    </userDataContext.Provider>
  )
}

export default UserContext;
