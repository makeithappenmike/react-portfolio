import React, { useState, useRef } from 'react';
import Header from './Header';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Hero from './sections/Hero';

// const styles = {
//   sections: {
//     padding: '50px',
//     color: 'white',
//     backgroundColor: 'black'
//   },
//   hero: {
//   },
//   about: {
//     padding: '10px',
//     // borderLeft: '10px solid #9B2226',
//     // borderRadius: '5px',
//     // backgroundColor: '#212529',
//     // marginBottom: '50px',
//     // padding: '10px',
//     // color: 'white'
//   },
//   portfolio: {
//     padding: '10px',
//   },
//   resume: {
//     padding: '10px',
//   },
//   contact: {
//     padding: '10px',
//   },
//   active: {
//     borderLeft: '10px solid #9B2226',
//     borderRadius: '5px',
//     // backgroundColor: isActive ? 'salmon' : '',
//     marginBottom: '50px',
//     padding: '10px',
//     color: 'white'
//   },
// };

export default function PortfolioContainer() {
  
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  // const ref = useRef(null);
  // const contact = useRef(null);
  // const handleSectionChange = (e) => {
  //   console.log(e.target.id, 'Clicked');
  //   ref.current?.scrollIntoView({behavior: 'smooth'});
  // };

  const renderSection = () => {
    return <section className='page'>
      <section id='hero' style={styles.hero}>
        <Hero />
      </section>
      <section className='sections' style={styles.sections}>
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
    </section>
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
      // borderLeft: '10px solid #9B2226',
      // borderRadius: '5px',
      // backgroundColor: '#212529',
      // marginBottom: '50px',
      // padding: '10px',
      // color: 'white'
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
      backgroundColor: isActive ? 'salmon' : '',
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
