import React, { useState, useRef, useEffect } from 'react';
import { useInView, InView } from 'react-intersection-observer';
import Header from './Header';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Resume from './sections/Resume';
import Footer from '../components/Footer';
import Contact from './sections/Contact';
import Form from "../components/Form/index";
import Hero from './sections/Hero';
import Navigation from './Navigation';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';

export default function PortfolioContainer() {

  const { ref: aboutRef, inView: aboutCurrent } = useInView();
  const { ref: portfolioRef, inView: portfolioCurrent } = useInView();
  const { ref: resumeRef, inView: resumeCurrent } = useInView();
  const { ref: contactRef, inView: contactCurrent } = useInView();

  const renderSection = () => {

    return <ParallaxProvider>
      <section className='page'>
      <section id='hero' style={styles.hero}>
        <Hero />
      </section>
      <section className='sections'>
        <section ref={aboutRef} id='about' style={styles.about}>
        <Parallax>
        <InView onChange={(inView, entry) => console.log('Inview:', inView)}>
          <About />
          </InView>
          </Parallax>
        </section>
        <section ref={portfolioRef} id='portfolio' style={styles.portfolio}>
        <Parallax>
          <Portfolio />
          </Parallax>
        </section>
        <section ref={resumeRef} id='resume' style={styles.resume}>
        <Parallax>
          <Resume />
          </Parallax>
        </section>
        <section ref={contactRef} id='contact' style={styles.contact}>
        <Parallax>
          <Contact />
          </Parallax>
        </section>
        <section id='footer' style={styles.footer}>
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
      backgroundColor: 'black',
      color: 'white',
    },
    portfolio: {
      padding: '50px',
      paddingTop: '50px',
      backgroundColor: 'black',
      color: 'white',
    },
    resume: {
      padding: '50px',
      backgroundColor: 'black',
      color: 'white',
    },
    contact: {
      padding: '50px',
      backgroundColor: 'black',
      color: 'white',
    },
    footer: {
      padding: '15px',
      minHeight: '50px',
      backgroundColor: '#343a40',
      color: 'white',
      textAlign: 'center'
    },
    active: {
      borderLeft: '10px solid #ffba08',
      marginBottom: '50px',
      padding: '10px',
      color: 'white'
    },
  };

  return (
    <section className='portfolioContainer'>
      {/* <Header currentSection={currentSection} handleSectionChange={handleSectionChange} /> */}
      <Header />
      {renderSection()}
    </section>
  );
}
