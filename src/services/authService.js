import api from "./api";

// funcao retorna a resposata do usuario ou um erro
const loginUserApi = (userValues) => 
    api.post('/auth/login', userValues).then((response) => response).catch((err) => console.error('Erro na chamada', err));

export { loginUserApi }

