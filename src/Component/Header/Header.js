import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='fs-3 fw-bold header-brand' href="/">Educational Quiz Crackers</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link>
            
          </Nav>
          <Nav className='NavLink-Btn'>
            <NavLink to='/topics'>Topics</NavLink>
            <NavLink to='/statistic'>Statistic</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;
