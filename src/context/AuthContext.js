import React, { useEffect } from 'react';
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

//Quando o user tiver logado, o setUserLogged vai pra true
useEffect(() => {
  const userInfo = localStorage.getItem('userInfo');

  if(userInfo) {
    setUserLogged(true);
    alert('Usuario logado');
    }else {
      alert('Usuario nao logado');
    }

}, [])

const loginUser = async (inputValues) => {
  const response = await fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'       
    },
    body: JSON.stringify(inputValues)
    
  })
//Ver o dado da resposta que ta no body(conteudo)
const data = await response.json();
console.log(data);

  console.log(response);

  // variavel pra armazenar o logon do usuario. Converte a resposta (OBJ) em JSON
  localStorage.setItem('userInfo', JSON.stringify(data))
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