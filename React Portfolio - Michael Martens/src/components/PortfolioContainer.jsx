import React, { useState, useRef } from 'react';
import Header from './Header';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

export default function PortfolioContainer() {
  
  const [currentSection, setCurrentSection] = useState('About');
  const ref = useRef(null);
  const contact = useRef(null);
  const handleSectionChange = (e) => {
    console.log(e.target.id, 'Clicked');
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const renderSection = () => {
    return <section>
      <About activeClass="active" to="About" spy={true} smooth={true} currentSection={currentSection} handleSectionChange={handleSectionChange} />
      <Portfolio currentSection={currentSection} handleSectionChange={handleSectionChange} />
      <Resume currentSection={currentSection} handleSectionChange={handleSectionChange} />
      <section ref={contact}>
      <Contact to="contact" spy={true} smooth={true} currentSection={currentSection} handleSectionChange={handleSectionChange} />
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
