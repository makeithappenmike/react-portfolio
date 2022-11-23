import React, { useState, useRef } from 'react';
import Header from './Header';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

const styles = {
  about: {
    borderLeft: '10px solid blue',
    backgroundColor: 'gray'
  },
  portfolio: {
  },
  resume: {
  },
  contact: {
  }
};

export default function PortfolioContainer() {
  
  const [currentSection, setCurrentSection] = useState('About');
  const ref = useRef(null);
  const contact = useRef(null);
  const handleSectionChange = (e) => {
    console.log(e.target.id, 'Clicked');
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const renderSection = () => {
    return <section className='page'>
      <section id='about' style={styles.about}>
      <About />
      </section>
      <section id='portfolio' style={styles.portfolio}>
      <Portfolio />
      </section>
      <section id='resume' style={styles.resume}>
      <Resume />
      </section>
      <section id='contact' style={styles.contact}>
      <Contact />
      </section>
    </section>
  };

  // const handleSectionChange = (sectionClicked) => setCurrentSection(sectionClicked);

  return (
    <section className='portfolioContainer'>
      <Header currentSection={currentSection} handleSectionChange={handleSectionChange} />
      {renderSection()}
    </section>
  );
}
