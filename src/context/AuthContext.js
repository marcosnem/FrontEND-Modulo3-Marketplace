import React from 'react';
import { createContext } from 'react'
import useAuth from '../hooks/useAuth';

//funcao para init o contexto 
const AuthContext = createContext();

//Componente de contexto 
const AuthProvider = ({ children }) => {
const { userLogged, userFull, loading, loginUser, logoutUser } = useAuth();

//Enquanto carrega, exibe a palavra loading 
if(loading) {
  return <h1>Loading</h1>
  }

return (
    <AuthContext.Provider value={{ userLogged, userFull, loginUser, logoutUser}}> 
     { children }
    </AuthContext.Provider>
  )
}

export {  AuthContext, AuthProvider } 