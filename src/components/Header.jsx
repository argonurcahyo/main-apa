import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
 return (
  <Navbar bg="light" expand="lg">
   <Container>
    <Navbar.Brand><Link to="/">MaenApa</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="me-auto">
      <NavLink to="/">Home</NavLink>
     </Nav>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 )
}

export default Header