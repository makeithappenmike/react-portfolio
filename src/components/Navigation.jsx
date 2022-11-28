import React, { useState, useRef, useEffect, Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mm_logo_white from '../assets/mm_logo_white.png';

function Navigation({ currentPage, handlePageChange }) {

  const [isActive, setIsActive] = useState('styles.active');

  const styles = {
    logo: {
      maxHeight: 50,
    },
    navbar: {
      backgroundColor: 'black'
    },
    active: {
      borderLeft: '10px solid #9B2226',
      borderRadius: '5px',
      backgroundColor: isActive ? 'red' : 'blue',
      marginBottom: '50px',
      padding: '10px',
      color: 'white'
    },
  };

  return (
    <>
    <Navbar collapseOnSelect expand='lg' style={styles.navbar} variant='dark'>
      <Container>
        <Navbar.Brand href='#home'><img to='home' spy='true' smooth='true' href='#home' style={styles.logo} className='mm_logo' src={mm_logo_white} /></Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link delay={1000} to='about' spy='true' smooth='true' href='#about' id='About'>About</Nav.Link>
            <Nav.Link delay={1000} to='portfolio' spy='true' smooth='true' href='#portfolio' id='Portfolio'>Portfolio</Nav.Link >
            <Nav.Link delay={1000} to='resume' spy='true' smooth='true' href='#resume' id='Resume'>Resume</Nav.Link >
            <Nav.Link delay={1000} to='contact' spy='true' smooth='true' href='#contact' id='Contact'>Contact</Nav.Link >
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navigation;
