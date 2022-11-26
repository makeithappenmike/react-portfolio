import React from 'react';
import hero_bg from '../../assets/hero_bg.jpg';
import github_white from '../../assets/github_white.png';
import linkedin_white from '../../assets/linkedin_white.png';
// import { ParallaxBanner } from 'react-scroll-parallax';

const styles = {
  hero: {
    minHeight: '100vh',
    backgroundImage: 'url(../../assets/hero_bg.jpg)',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'black'
  },
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
    maxWidth: '40px',
    padding: '10px',
  }
}

function Hero() {
  return (
    <section className='pageSection hero' style={styles.hero}>
    <div style={styles.hero_text}>
      <h1>Hi, I'm Michael.</h1>
      <p>A Software Engineer.</p>
      <span><a href='https://github.com/makeithappenmike' target='blank'><img style={styles.socials} src={github_white} /></a></span><span><a href='https://www.linkedin.com/in/makeithappenmike/
' target='blank'><img style={styles.socials} src={linkedin_white} /></a></span>
    </div>
    <img className='hero_image' src={hero_bg} style={styles.hero_img} />
    {/* <ParallaxBanner
      layers={[{ image: hero_bg, speed: -15 }]}
      className="aspect-[2/1]" style={styles.hero_img}
    /> */}
    </section>
  )
}
export default Hero