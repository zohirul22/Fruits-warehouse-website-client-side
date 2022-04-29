import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><i>Fruits Warehouse</i></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#inventory">Inventory</Nav.Link>
      <Nav.Link href="#bestsellers">Best sellers</Nav.Link>
      <Nav.Link href="#blog">Blog</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link href="#login">Login</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;