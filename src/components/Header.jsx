import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="text-uppercase">John Doe</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" className="nav-link py-3 px-0 px-lg-3 rounded text-uppercase">Accueil</Nav.Link>
              <Nav.Link as={NavLink} to="/Service" className="nav-link py-3 px-0 px-lg-3 rounded text-uppercase">Services</Nav.Link>
              <Nav.Link as={NavLink} to="/Realisation" className="nav-link py-3 px-0 px-lg-3 rounded text-uppercase">Réalisations</Nav.Link>
              <Nav.Link as={NavLink} to="/Blog" className="nav-link py-3 px-0 px-lg-3 rounded text-uppercase">Blog</Nav.Link>
              <Nav.Link as={NavLink} to="/MeContacter" className="nav-link py-3 px-0 px-lg-3 rounded text-uppercase">Me contacter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
