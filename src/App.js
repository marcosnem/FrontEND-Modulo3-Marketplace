import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/';
import NavBar from './components/NavBar';
import Login from './pages/Login';

function App() {
  return (
<>
<NavBar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
</Routes>
</>
  );
}

export default App;
