import  UserDataContext from './UserContext';

const UserContext = ({ children }) => {

  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  
  return (
    <UserDataContext.Provider value={userData}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
