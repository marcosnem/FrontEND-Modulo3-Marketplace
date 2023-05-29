import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserApi } from '../services/authService';


const useAuth = () => {
  //variavel de estado para verifi logon user
  const [userLogged, setUserLogged] = useState(false);

  //state para carregar a rota, enquanto ver o user ta logado
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  //Quando o user tiver logado, o setUserLogged vai pra true
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      setUserLogged(true);
      }

    //se user logado, loading volta para false
    setLoading(false);
  }, [])

  const loginUser = async (inputValues) => {
    //uso a api para login
    const response = await loginUserApi(inputValues);
    const data = await response.data;
    console.log(data);
    localStorage.setItem('userInfo', JSON.stringify(data))
    navigate('/')
    setUserLogged(true);
  }

  // Funcao logout
  const logoutUser = () => {
    setUserLogged(false);
    localStorage.clear();
    navigate("/login");
  };

  return { userLogged, loading, loginUser, logoutUser };
};

export default useAuth;
