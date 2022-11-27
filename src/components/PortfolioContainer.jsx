import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Resume from './sections/Resume';
import Footer from '../components/Footer';
// import Contact from './sections/Contact';
import Form from "../components/Form/index";
import Hero from './sections/Hero';
import Navigation from './Navigation';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';

export default function PortfolioContainer() {
  
  // const handleClick = event => {
  //   window.addEventListener('click', console.log('Clicking'));
  //   console.log('Target: ', event.currentTarget.id);
  //   setIsActive(() => {
  //     console.log('Hello');
  //     console.log(document.querySelector('#' + event.currentTarget.id).style={styles.active});
      
  //   });
  //   // event.currentTarget.id.style={styles.active};
  // };

// The scroll listener
const handleScroll = () => {
  const sectionHeight = document.querySelector('#about').offsetHeight;
    window.addEventListener("scroll", () => {
      // console.log('Scroll Y:', window.scrollY);
      // console.log('Section Height:', sectionHeight);
      // if (window.scrollY < sectionHeight / 2 && window.scrollY > sectionHeight * 1.5) {
      //   document.querySelector('#about').style.backgroundColor = 'pink';
      // } else if (window.scrollY > sectionHeight * 1.5 && window.scrollY < sectionHeight * 2.5) {
      //   document.querySelector('#portfolio').style.backgroundColor = 'pink';
      //   document.querySelector('#about').style.backgroundColor = 'black';
      //   document.querySelector('#about').style.backgroundColor = '';
      // } else if (window.scrollY > 450 && window.scrollY < 550) {
      //   document.querySelector('#resume').style.backgroundColor = 'red';
      //   document.querySelector('#portfolio').style.backgroundColor = '';
      // }
    });
  };
const myRef = useRef();
const [currentSection, setCurrentSection] = useState();
console.log('currentSection', currentSection);
// Attach the scroll listener to the div
useEffect(() => {
  // const div = ref.current
 console.log('myRef:', myRef.current);
 const observer = new IntersectionObserver((entries) => {
   const entry = entries[0];
   setCurrentSection(entry.isIntersecting);
 });
 observer.observe(myRef.current);
}, [])

// Attach the scroll listener to the div
useEffect(() => {
  // const div = ref.current
  window.addEventListener("scroll", handleScroll)
}, [handleScroll])

  const [isActive, setIsActive] = useState(false);
  // const { ref } = useParallax({ speed: 10, onEnter: (element) => console.log('Enter', element.el), onExit: (element) => console.log('Exit', element.el),  });

  const renderSection = () => {

    const handleClick = event => {
      window.addEventListener('click', console.log('Clicking'));
      console.log('Target: ', event.currentTarget.id);
      // setIsActive(() => {
      //   console.log('Hello');
      //   console.log(document.querySelector('#' + event.currentTarget.id));
      //   document.querySelector('#' + event.currentTarget.id).style.backgroundColor = 'green';
      // });
      // event.currentTarget.id.style={styles.active};
    };

    return <ParallaxProvider>
      <section className='page'>
      <section id='hero' style={styles.hero}  onClick={handleClick} onScroll={handleScroll}>
        <Hero />
      </section>
      <section className='sections'>
        <section ref={myRef} id='about' style={styles.about} onClick={handleClick} onScroll={handleScroll}>
        <Parallax>
          <p>{ currentSection ? document.querySelector('#about').style.borderLeft = '5px solid white' : '' }
          { !currentSection ? document.querySelector('#about').style.borderLeft = '0px solid white' : '' }</p>
          <About />
          </Parallax>
        </section>
        <section ref={myRef} id='portfolio' style={styles.portfolio} onClick={handleClick} onScroll={handleScroll}>
        <Parallax>
        <p>{ currentSection ? 'Yes' : 'No' }</p>
          <Portfolio />
          </Parallax>
        </section>
        <section ref={myRef} id='resume' style={styles.resume} onClick={handleClick} onScroll={handleScroll}>
        <Parallax>
        <p>{ currentSection ? 'Yes' : 'No' }</p>
          <Resume />
          </Parallax>
        </section>
        <section ref={myRef} id='contact' style={styles.contact} onClick={handleClick} onScroll={handleScroll}>
        <Parallax>
        <p>{ currentSection ? 'Yes' : 'No' }</p>
          <Form />
          </Parallax>
        </section>
        <section id='footer' style={styles.footer} onClick={handleClick} onScroll={handleScroll}>
          <Footer />
        </section>
      </section>
    </section>
    </ParallaxProvider>
  };

  const styles = {
    sections: {
      padding: '50px',
      color: 'white',
      backgroundColor: 'black',
    },
    hero: {
    },
    about: {
      padding: '50px',
      // minHeight: '100vh',
      // borderLeft: '15px solid #9d0208',
      // borderRadius: '5px',
      backgroundColor: 'black',
      color: 'white',
    },
    portfolio: {
      padding: '50px',
      paddingTop: '50px',
      // minHeight: '100vh',
      // borderLeft: '15px solid #dc2f02',
      backgroundColor: 'black',
      color: 'white',
    },
    resume: {
      padding: '50px',
      // minHeight: '100vh',
      // borderLeft: '15px solid #f48c06',
      backgroundColor: 'black',
      color: 'white',
    },
    contact: {
      padding: '50px',
      // minHeight: '100vh',
      // borderLeft: '15px solid #faa307',
      backgroundColor: 'black',
      color: 'white',
    },
    footer: {
      padding: '15px',
      minHeight: '50px',
      // borderLeft: '15px solid #ffba08',
      backgroundColor: '#343a40',
      color: 'white',
      textAlign: 'center'
    },
    // active: {
    //   borderLeft: '10px solid #ffba08',
    //   // borderRadius: '5px',
    //   backgroundColor: isActive ? 'red' : 'blue',
    //   marginBottom: '50px',
    //   padding: '10px',
    //   color: 'white'
    // },
  };

  // const handleSectionChange = (sectionClicked) => setCurrentSection(sectionClicked);

  return (
    <section className='portfolioContainer'>
      {/* <Header currentSection={currentSection} handleSectionChange={handleSectionChange} /> */}
      <Header />
      {renderSection()}
    </section>
  );
}
