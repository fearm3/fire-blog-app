import React, { useContext, createContext } from "react";

//!Create context for authentication
const AuthContext = createContext();

//!Custom Hook for best Practice.
export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = () => {
  return 
  <div>
    
  </div>;
};

export default AuthContextProvider;
