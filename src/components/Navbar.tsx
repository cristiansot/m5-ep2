import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Modal, Form } from "react-bootstrap";
import logotipo from '../assets/img/logotipo.png';  

const AppNavbar = ({ onSectionChange }) => {
  const [activeSection, setActiveSection] = useState("Home");
  const [showLogin, setShowLogin] = useState(false);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    onSectionChange(section);
  };

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  return (
    <>
      <Navbar style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', marginBottom: 12, marginTop: 20 }} sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logotipo}  
              alt="Mi Clínica"
              style={{ height: 80 }}
            />
          </Navbar.Brand>
          <Nav className="text-center mt-4 mb-4">
            {["Home", "Equipo Médico", "Citas", "Testimonios"].map((section) => (
              <Nav.Link
                key={section}
                href="#"
                onClick={() => handleSectionClick(section)}
                active={activeSection === section}
              >
                {section}
              </Nav.Link>
            ))}
            <Button variant="outline-primary" onClick={handleLoginShow}>
              Login
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <Modal show={showLogin} onHide={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLoginClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleLoginClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AppNavbar;