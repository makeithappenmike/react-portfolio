import React, { useState, useRef, useEffect, Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-scroll';

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

  return (
    <>
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'><img src={'../assets/mm_logo.png'} /></Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link activeClass="active" to="about" spy={true} smooth={true} href='#about' id='About'>About</Nav.Link>
            <NavDropdown title='Portfolio' id='collasible-nav-dropdown' onClick={handleClick}>
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
            <Nav.Link to="contact" spy={true} smooth={true} href='#contact' id='Contact'>Contact</Nav.Link >
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navigation;
