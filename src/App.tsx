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
import Carousel from './components/Carousel'

interface Doctor {
  nombre: string;
  especialidad: string;
}

interface AppointmentValues {
  patientName: string;
  doctor: string;
  appointmentDate: string;
}

const handleAppointmentSubmit = (values: AppointmentValues, setAppointments: React.Dispatch<React.SetStateAction<any[]>>) => {
  setAppointments((prevAppointments) => [...prevAppointments, values]);
};

function App() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [appointments, setAppointments] = useState<AppointmentValues[]>([]); 

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
                <div>
                  <Carousel />
                  <h2>Citas Agendadas</h2>
                  <ul>
                    {appointments.map((appointment, index) => (
                      <li key={index}>
                        {appointment.patientName} - {appointment.doctor} - {appointment.appointmentDate}
                      </li>
                    ))}
                  </ul>

                  <AppointmentForm doctors={doctors} onAppointmentSubmit={(values) => handleAppointmentSubmit(values, setAppointments)} />
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
