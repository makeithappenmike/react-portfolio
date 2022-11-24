import React from 'react';
import hero_bg from '../../assets/hero_bg.jpg';
import github_white from '../../assets/github_white.png';
import linkedin_white from '../../assets/linkedin_white.png';

const styles = {
  hero_img: {
    maxWidth: '100vw'
  },
  hero_text: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
  },
  socials: {
    maxWidth: '40px'
  }
}

function Hero() {
  return (
    <section className='pageSection hero' >
    <div style={styles.hero_text}>
      <h1>Hi, I'm Michael.</h1>
      <p>A Software Engineer.</p>
      <span><img style={styles.socials} src={github_white} /></span><span><img style={styles.socials} src={linkedin_white} /></span>
    </div>
    <img className='hero_image' src={hero_bg} style={styles.hero_img} />
    </section>
  )
}

export default Hero