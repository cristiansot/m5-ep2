import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EquipoMedico from "./components/EquipoMedico";
import Testimonios from "./components/Testimonios";
import AppNavbar from "./components/Navbar";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route
            path="/equipo-medico"
            element={
              <ProtectedRoute requiredRole="admin">
                <EquipoMedico />
              </ProtectedRoute>
            }
          />
          <Route
            path="/citas"
            element={
              <ProtectedRoute requiredRole="admin">
                <h1>Página de Citas (Por implementar)</h1>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
