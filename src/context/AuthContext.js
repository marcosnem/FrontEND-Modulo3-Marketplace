import React from 'react';
import { createContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



//funcao para init o contexto 
const AuthContext = createContext();

//Componente de contexto 
const AuthProvider = ({ children }) => {

//variavel de estado para verifi logon user
const [ userLogged, setUserLogged ] = useState(false);  
const navigate = useNavigate();

const loginUser = async (inputValues) => {
  const response = await fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'       
    },
    body: JSON.stringify(inputValues)
    
  })
  console.log(response);
  navigate('/')
  setUserLogged(true);
}
 
return (
    <AuthContext.Provider value={{userLogged, loginUser}}> 
     { children }
    </AuthContext.Provider>
  )
}

export {  AuthContext, AuthProvider } 