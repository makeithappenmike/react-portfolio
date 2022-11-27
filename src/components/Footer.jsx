import github_white from '../assets/github_white.png';
import linkedin_white from '../assets/linkedin_white.png';
    // import { ParallaxBanner } from 'react-scroll-parallax';
    
    const styles = {
      socials: {
        maxWidth: '40px',
        padding: '10px',
      }
    }

function Footer(props) {

    return (
      <section className='pageSection footer'>
      <span><a href='https://github.com/makeithappenmike' target='blank'><img style={styles.socials} src={github_white} /></a></span><span><a href='https://www.linkedin.com/in/makeithappenmike/' target='blank'><img style={styles.socials} src={linkedin_white} /></a>
      </span>
      </section>
    )
  }
  
  Footer.propTypes = {}
  
  export default Footer
  