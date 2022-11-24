import React, { useState, useRef, useEffect, Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import mm_logo_white from '../assets/mm_logo_white.png';

function Navigation({ currentPage, handlePageChange }) {

  // const [isActive, setCurrentSection] = useState('About');
  // const ref = useRef(null);
  // const about = useRef(null);
  // const portfolio = useRef(null);
  // const resume = useRef(null);
  // const contact = useRef(null);

  // () => {useEffect(() => {
  //   const sectionClicked = ref.current.id;
  //   window.addEventListener('click', console.log("Clicked:", sectionClicked))
    
  // }, []);}

  // const handleClick = (elementRef) => {
  //   console.log(elementRef.target.id, 'Clicked');
  //   // console.log("e.current", elementRef);
  //   // () => {useEffect(() => {
  //   //   const sectionClicked = ref.current.id;
  //   //   console.log("Clicked:", sectionClicked);
  //   // }, []);}
  //   window.scrollTo({
  //     top: elementRef,
  //     behavior: 'smooth'
  //   });
  //   // ref.current?.scrollIntoView({behavior: 'smooth'});
  // };

  const [isActive, setIsActive] = useState('styles.active');

  // const handleClick = () => {

  //   console.log('Click!');
  //   if (!isActive) {
  //     setIsActive(isActive);
  //   } else {
  //     setIsActive(!isActive)
  //   }
  //   // setIsActive(true);
  // };

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
        <Navbar.Brand href='#home'><img to="home" spy smooth href='#home' style={styles.logo} className='mm_logo' src={mm_logo_white} /></Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link delay={1000} to="about" spy smooth href='#about' id='About'>About</Nav.Link>
            <NavDropdown title='Portfolio' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#project/one' id='Project_One'>
                Project One
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#project/two' id='Project_Two'>
                Project Two
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#project/three' id='Project_Three'>
                Project Three
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link delay={1000} to="resume" spy smooth href='#resume' id='Resume'>Resume</Nav.Link >
            <Nav.Link delay={1000} to="contact" spy smooth href='#contact' id='Contact'>Contact</Nav.Link >
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navigation;
