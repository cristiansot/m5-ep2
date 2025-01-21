import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EquipoMedico from "./components/EquipoMedico";
import Testimonios from "./components/Testimonios";
import AppNavbar from "./components/Navbar"; 
import './App.css';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipo-medico" element={<EquipoMedico />} />
        <Route path="/testimonios" element={<Testimonios />} />
        <Route path="/citas" element={<h1>Página de Citas (Por implementar)</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
