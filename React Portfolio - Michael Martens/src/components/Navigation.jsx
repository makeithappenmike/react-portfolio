import React, { useState, useRef, useEffect, Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import mm_logo_white from '../assets/mm_logo_white.png';

function Navigation({ currentPage, handlePageChange }) {

  // const [currentSection, setCurrentSection] = useState('About');
  const ref = useRef(null);
  const about = useRef(null);
  const portfolio = useRef(null);
  const resume = useRef(null);
  const contact = useRef(null);

  () => {useEffect(() => {
    const sectionClicked = ref.current.id;
    window.addEventListener('click', console.log("Clicked:", sectionClicked))
    
  }, []);}

  const handleClick = (elementRef) => {
    console.log(elementRef.target.id, 'Clicked');
    // console.log("e.current", elementRef);
    // () => {useEffect(() => {
    //   const sectionClicked = ref.current.id;
    //   console.log("Clicked:", sectionClicked);
    // }, []);}
    window.scrollTo({
      top: elementRef,
      behavior: 'smooth'
    });
    // ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const styles = {
    logo: {
      maxHeight: 50,
    },
  };

  return (
    <>
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'><img style={styles.logo} class='mm_logo' src={mm_logo_white} /></Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link activeClass="active" delay={1000} to="about" spy={true} smooth={true} href='#about' id='About'>About</Nav.Link>
            <NavDropdown title='Portfolio' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#project/one' onClick={handleClick} id='Project_One'>
                Project One
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#project/two' onClick={handleClick} id='Project_Two'>
                Project Two
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#project/three' onClick={handleClick} id='Project_Three'>
                Project Three
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link delay={1000} to="resume" spy={true} smooth={true} href='#resume' id='Resume'>Resume</Nav.Link >
            <Nav.Link delay={1000} to="contact" spy={true} smooth={true} href='#contact' id='Contact'>Contact</Nav.Link >
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navigation;
