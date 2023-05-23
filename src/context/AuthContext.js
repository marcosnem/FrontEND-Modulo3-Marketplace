import React from 'react';
import { createContext } from 'react'
import { useState } from 'react';

//funcao para init o contexto 
const AuthContext = createContext();

//Componente de contexto 
const AuthProvider = ({ children }) => {
//variavel de estado para verifi logon user
  const [ userLogged, setUserLogged ] = useState(true);  
  return (
    <AuthContext.Provider value={userLogged}> 
     { children }
    </AuthContext.Provider>
  )
}

export {  AuthContext, AuthProvider } 