import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import NavBar from "./components/NavBar";
import Login from "./pages/Login/";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      {/* AuthProvider vai usar os valores de memoria */}
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route
            path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }/>
          <Route path="/login" element={<Login/>} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
