import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import logo from "../../assets/logoicon.png";
import { Link } from 'react-router-dom';
import './Menubar.css';

function Menubar() {
  return (
    <Navbar expand="lg" className="navbarbg p-0 m-0 sticky-top">
      <Container className='p-0 m-0'>
        {/* Logo aligned left */}
        <Navbar.Brand href="#home" className="d-flex p-0 m-0">
          <img src={logo} alt="Logo"  className='logosize'/>
        </Navbar.Brand>
        
        {/* Toggle Button for Small Screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto ms-3 ms-lg-3">
            <Nav.Link as={Link} to="/" className='navtext px-2'>HOME</Nav.Link>
            <NavDropdown title={<span className='navtext2 px-2'>WHO WE ARE</span>} id="basic-nav-dropdown" className='text-light'>
              <NavDropdown.Item as={Link} to="/aboutfounder" className='navtext1'>About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/founder"  className='navtext1'>Our Founder</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/boardmembers" className='navtext1' >Our Board</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<span className='navtext2 px-2'>SERVICES</span>} id="basic-nav-dropdown" className='text-light'>
              <NavDropdown.Item as={Link} to="/drugsafety" className='navtext1'>Drug Safety Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pharmacovigilance" className='navtext1' >Pharmacovigilance Consulting</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Strategy" className='navtext1'>Strategic Partnerships</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className='navtext px-3'>NEWS</Nav.Link>
            <Nav.Link href="#link" className='navtext px-3'>DOWNLOADS</Nav.Link>
            <Nav.Link as={Link} to="/careers" className='navtext px-3'>CAREERS</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='navtext px-3'>CONTACT</Nav.Link>
 
          </Nav>
          <InputGroup
        className="d-flex ms-0"
        style={{
          maxWidth: '400px',
          borderRadius: '100px',
          overflow: 'hidden', // Ensures child elements respect borderRadius
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        <InputGroup.Text
          id="search-addon"
          style={{ backgroundColor: 'white', border: 'none', color: 'var(--heading)' }}
        >
            <i className="bi bi-search"></i>
          </InputGroup.Text>
          <FormControl
            type="search"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            style={{
              borderRadius: '0', // Ensures the input field does not override parent radius
              outline: 'none', // Removes focus outline
              boxShadow: 'none', // Removes any shadow applied during focus
              border: 'none', // Removes the default border
            }}
          />
        </InputGroup>
        </Navbar.Collapse>
      </Container >
    </Navbar>
  );
}

export default Menubar;
