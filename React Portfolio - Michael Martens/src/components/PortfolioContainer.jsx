import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
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
    window.addEventListener("scroll", () => {
      // console.log('Two', window.scrollY);
      if (window.scrollY > 250 && window.scrollY < 350) {
        document.querySelector('#about').style.backgroundColor = 'green';
      } else if (window.scrollY > 350 && window.scrollY < 450) {
        document.querySelector('#portfolio').style.backgroundColor = 'red';
        document.querySelector('#about').style.backgroundColor = '';
      } else if (window.scrollY > 450 && window.scrollY < 550) {
        document.querySelector('#resume').style.backgroundColor = 'red';
        document.querySelector('#portfolio').style.backgroundColor = '';
      }
    });
  };

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
      setIsActive(() => {
        console.log('Hello');
        console.log(document.querySelector('#' + event.currentTarget.id));
        document.querySelector('#' + event.currentTarget.id).style.backgroundColor = 'green';

        
      });
      // event.currentTarget.id.style={styles.active};
    };

    return <ParallaxProvider>
      <section className='page'>
      <section id='hero' style={styles.hero}  onClick={handleClick} onScroll={handleScroll} >
        <Hero />
      </section>
      <section className='sections'>
        <section id='about' style={styles.about} onClick={handleClick} onScroll={handleScroll}>
        <Parallax>
          <About />
          </Parallax>
        </section>
        <section id='portfolio' style={styles.portfolio} onClick={handleClick} onScroll={handleScroll}>
        <Parallax>
          <Portfolio />
          </Parallax>
        </section>
        <section id='resume' style={styles.resume} onClick={handleClick} onScroll={handleScroll}>
        <Parallax>
          <Resume />
          </Parallax>
        </section>
        <section id='contact' style={styles.contact} onClick={handleClick} onScroll={handleScroll}>
        <Parallax>
          <Contact />
          </Parallax>
        </section>
      </section>
    </section>
    </ParallaxProvider>
  };

  const styles = {
    sections: {
      padding: '50px',
      color: 'white',
      backgroundColor: 'black'
    },
    hero: {
    },
    about: {
      padding: '10px',
    },
    portfolio: {
      padding: '10px',
    },
    resume: {
      padding: '10px',
    },
    contact: {
      padding: '10px',
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

  // const handleSectionChange = (sectionClicked) => setCurrentSection(sectionClicked);

  return (
    <section className='portfolioContainer'>
      {/* <Header currentSection={currentSection} handleSectionChange={handleSectionChange} /> */}
      <Header />
      {renderSection()}
    </section>
  );
}
