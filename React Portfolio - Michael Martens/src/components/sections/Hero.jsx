import React from 'react';
import hero_bg from '../../assets/hero_bg.jpg';

const styles = {
  hero_img: {
    maxWidth: '100vw'
  }
}

function Hero() {
  return (
    <section className='pageSection hero' >
    <img className='hero_image' src={hero_bg} style={styles.hero_img} />
    </section>
  )
}

export default Hero