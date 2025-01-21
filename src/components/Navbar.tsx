import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logotipo from "../assets/img/logotipo.png";

const AppNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  return (
    <>
      <Navbar
        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", marginBottom: 12, marginTop: 20 }}
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logotipo} alt="Mi Clínica" style={{ height: 80 }} />
            </Link>
          </Navbar.Brand>
          <Nav className="text-center mt-4 mb-4">
            <Nav.Link as={Link} to="/" style={{ textDecoration: "none" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/equipo-medico" style={{ textDecoration: "none" }}>
              Equipo Médico
            </Nav.Link>
            <Nav.Link as={Link} to="/citas" style={{ textDecoration: "none" }}>
              Citas
            </Nav.Link>
            <Nav.Link as={Link} to="/testimonios" style={{ textDecoration: "none" }}>
              Testimonios
            </Nav.Link>
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
