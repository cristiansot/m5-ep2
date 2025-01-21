import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EquipoMedico from "./components/EquipoMedico";
import Testimonios from "./components/Testimonios";
import AppNavbar from "./components/Navbar";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import AppointmentForm from "./components/AppointmentForm";
import "./App.css";

interface Doctor {
  nombre: string;
  especialidad: string;
}

const handleAppointmentSubmit = (values: AppointmentValues) => {
  console.log("Cita agendada:", values);
};

function App() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    fetch("src/assets/equipo.json")
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error("Error al cargar los doctores:", error));
  }, []);

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
                <AppointmentForm doctors={doctors} onAppointmentSubmit={handleAppointmentSubmit} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
