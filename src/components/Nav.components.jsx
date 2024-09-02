import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavDropdown,Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/navbar.css';
import logo from '../utils/logo1.png';
const Navigation=()=> {
  return (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to="/" style={{ textDecoration: 'none' ,color:'black'}}>
        <img
              src={logo}
              width="60"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Aeroglobalconsultancy</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/' style={{ textDecoration: 'none' ,color:'black'}}>Home</Link></Nav.Link>
            <Nav.Link><Link to="/Blog" style={{ textDecoration: 'none' ,color:'black'}}>Blog</Link></Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to='/AboutUs' style={{ textDecoration: 'none' ,color:'black'}}>About</Link></NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Appointment" style={{ textDecoration: 'none' ,color:'black'}}>Appointment</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Study Destination" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to='/Study_in_US' style={{ textDecoration: 'none' ,color:'black'}}>USA</Link></NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Study_in_AUS" style={{ textDecoration: 'none' ,color:'black'}}>AUSTRALIA</Link>
              </NavDropdown.Item>
              <NavDropdown.Item><Link to="/Study_in_CANADA" style={{ textDecoration: 'none' ,color:'black'}}>CANADA</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/Study_in_UK" style={{ textDecoration: 'none' ,color:'black'}}>UK</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/Study_in_EU" style={{ textDecoration: 'none' ,color:'black'}}>EUROPE</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/Study_in_DEN" style={{ textDecoration: 'none' ,color:'black'}}>DENMARK</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Test Preparation" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/Ielts" style={{ textDecoration: 'none' ,color:'black'}}>IELTS</Link></NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Pte" style={{ textDecoration: 'none' ,color:'black'}}>PTE</Link>
              </NavDropdown.Item>
              <NavDropdown.Item><Link to="/Toefl" style={{ textDecoration: 'none' ,color:'black'}}>TOEFL</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;
