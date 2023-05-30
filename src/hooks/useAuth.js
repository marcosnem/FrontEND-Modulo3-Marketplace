import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserApi, getUserById } from '../services/authService';
import api from "../services/api";


const useAuth = () => {
  //variavel de estado para verifi logon user
  const [userLogged, setUserLogged] = useState(false);

  //state para carregar a rota, enquanto ver o user ta logado
  const [loading, setLoading] = useState(true);

  // receber a resposta do servidor
  const [ userFull, setUserFull ] = useState({});

  // // estado para a armazenar o id 
  // const [ userId, setUserId] = useState('');



  const navigate = useNavigate();

  //Quando o user tiver logado, o setUserLogged vai pra true
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    console.log(userInfo);

    if (userInfo) {
      api.defaults.headers.common['Authorization'] = `Bearer ${userInfo.token}`
      findUserById(userInfo.id);
      setUserLogged(true);
      }

    //se user logado, loading volta para false
    setLoading(false);
  }, [])

  const loginUser = async (inputValues) => {
    //uso a api para login
    const response = await loginUserApi(inputValues);
    const data = await response.data;
    
    localStorage.setItem('userInfo', JSON.stringify(data))
    //setar configuracoes de headers para autenticar as chamadas
    api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
    navigate('/')
    setUserLogged(true);
  }

  // Funcao logout
  const logoutUser = () => {
    setUserLogged(false);
    localStorage.clear();
    navigate("/login");
  };

  const findUserById = async (idUser) => {
    const response = await getUserById(idUser);
    setUserFull(response.data);

    console.log(userFull);

  }

  return { userLogged, userFull, loading, loginUser, logoutUser };
};

export default useAuth;
