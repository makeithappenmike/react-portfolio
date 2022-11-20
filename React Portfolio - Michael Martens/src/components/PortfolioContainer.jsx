import React, { useState } from 'react';
import Header from './Header';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

export default function PortfolioContainer() {
  const [currentSection, setCurrentSection] = useState('About');

  const renderSection = () => {
    return <section>
      <About currentSection={currentSection} handleSectionChange={handleSectionChange} />
      <Portfolio currentSection={currentSection} handleSectionChange={handleSectionChange} />
      <Resume currentSection={currentSection} handleSectionChange={handleSectionChange} />
      <Contact currentSection={currentSection} handleSectionChange={handleSectionChange} />
    </section>
  };

  const handleSectionChange = (section) => setCurrentSection(section);

  return (
    <section className='portfolioContainer'>
      <Header currentSection={currentSection} handleSectionChange={handleSectionChange} />
      {renderSection()}
    </section>
  );
}
