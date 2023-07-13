import { Container, Nav, Navbar } from "react-bootstrap";
//logo
import logo from "../images/logo.png";
import "../style/style.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="header-posion">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Menu</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Cookbook</Nav.Link>
            <Nav.Link href="#">Catering</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
