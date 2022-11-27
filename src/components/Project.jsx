import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import placeholder from '../assets/placeholder.png';
import have_a_marvelous_time from '../assets/have-a-marvelous-time.png';
import NOVELty from '../assets/novelty.png';
import password_generator from '../assets/password_generator.png';
import scheduling_app from '../assets/scheduling_app.png';
import pwa_text_editor from '../assets/pwa_text_editor.png';
import weather_app from '../assets/weather_app.png';
import TopButton from '../components/TopButton';

const styles = {
  projects: {
    margin: '25px',
  },
  project: {
    width: '18rem',
    margin: '10px',
    backgroundColor: 'rgba(100, 100, 100, .5)'
  },
  image: {
    width: '100%',
    marginTop: '10px'
  },
  button: {
    width: '100%',
    margin: '5px'
  }
};

const buttonClass = 'btn btn-light';

function BasicExample() {
  return (
    <>
      <section className='portfolio' id='portfolio'>
      <h2>Portfolio</h2>
      {/* Project One */}
      <Row style={styles.projects} xs={1} md={2} className="g-4 justify-content-center">
      <Card style={styles.project} className="project">
        <Card.Img variant="top" src={have_a_marvelous_time} style={styles.image} />
        <Card.Body bg='secondary'>
          <Card.Title bg='primary' as='h4'>Have a Marvelous Time</Card.Title>
          <Card.Text>
            This was a group project where we had a little fun mixing the Marvel Universe with a bit of fan fiction! TL;DR, we wanted to help answer the question "What would Thor go out and do if he was bored?"
          </Card.Text>
          <a style={styles.button} className={buttonClass} target='blank' href="https://makeithappenmike.github.io/have-a-marvelous-time/" role="button">Visit the App</a>
          <a style={styles.button} className={buttonClass} target='blank' href="https://github.com/makeithappenmike/have-a-marvelous-time" role="button">Visit the Repository</a>
        </Card.Body>
      </Card>

      {/* Project Two */}
      <Card style={styles.project} className="project">
        <Card.Img variant="top" src={NOVELty} style={styles.image} />
        <Card.Body bg='secondary'>
          <Card.Title bg='primary' as='h4'>NOVELty</Card.Title>
          <Card.Text>
            Another group effort that was one of my favorite Bootcamp projects to work on. NOVELty let's someone catalogue, share, and borrow books with their friends.
          </Card.Text>
          <a style={styles.button} className={buttonClass} target='blank' href="https://novelty-book-swap.herokuapp.com/" role="button">Visit the App</a>
          <a style={styles.button} className={buttonClass} target='blank' href="https://github.com/VaishaliQA/Novelty_Project" role="button">Visit the Repository</a>
        </Card.Body>
      </Card>

    {/* Project Three */}
    <Card style={styles.project} className="project">
    <Card.Img variant="top" src={password_generator} style={styles.image} />
    <Card.Body bg='secondary'>
      <Card.Title bg='primary' as='h4'>Password Generator</Card.Title>
      <Card.Text>
        Need a new password? Enter: this app! Its quick and easy and uses a handful of window prompts to generate a unique string (don't forget to write it down!).
      </Card.Text>
          <a style={styles.button} className={buttonClass} target='blank' href="https://makeithappenmike.github.io/have-a-marvelous-time/" role="button">Visit the App</a>
          <a style={styles.button} className={buttonClass} target='blank' href="https://github.com/VaishaliQA/Novelty_Project" role="button">Visit the Repository</a>
    </Card.Body>
  </Card>

  {/* Project Four */}
  <Card style={styles.project} className="project">
    <Card.Img variant="top" src={scheduling_app} style={styles.image} />
    <Card.Body bg='secondary'>
      <Card.Title bg='primary' as='h4'>Scheduling App</Card.Title>
      <Card.Text>
        Your very own private Scheduling app with updating color codes based on the current time in reference to what you've scheduled.
      </Card.Text>
      <a style={styles.button} className={buttonClass} target='blank' href="https://makeithappenmike.github.io/scheduling-app/" role="button">Visit the App</a>
      <a style={styles.button} className={buttonClass} target='blank' href="https://github.com/makeithappenmike/scheduling-app" role="button">Visit the Repository</a>
    </Card.Body>
  </Card>

  {/* Project Five */}
  <Card style={styles.project} className="project">
    <Card.Img variant="top" src={pwa_text_editor} style={styles.image} />
    <Card.Body bg='secondary'>
      <Card.Title bg='primary' as='h4'>PWA Text Editor</Card.Title>
      <Card.Text>
        This is no ordinary Text Editor! It can be used on or offline and downloaded to your device to run as a Progressive Web Application.
      </Card.Text>
      <a style={styles.button} className={buttonClass} target='blank' href="https://tranquil-tundra-85451.herokuapp.com/" role="button">Visit the App</a>
      <a style={styles.button} className={buttonClass} target='blank' href="https://github.com/makeithappenmike/pwa-text-editor" role="button">Visit the Repository</a>
    </Card.Body>
  </Card>

  {/* Project Six */}
  <Card style={styles.project} className="project">
    <Card.Img variant="top" src={weather_app} style={styles.image} />
    <Card.Body bg='secondary'>
      <Card.Title bg='primary' as='h4'>Weather App</Card.Title>
      <Card.Text>
        Ever wondered if you'll need an umbrella later? If so, I've got you covered here. Check the current and future forecast for any location.
      </Card.Text>
      <a style={styles.button} className={buttonClass} target='blank' href="https://makeithappenmike.github.io/check-your-weather-app/" role="button">Visit the App</a>
      <a style={styles.button} className={buttonClass} target='blank' href="https://github.com/makeithappenmike/check-your-weather-app" role="button">Visit the Repository</a>
    </Card.Body>
  </Card>
  </Row>
  <TopButton />
  </section>
</>
  );
}

export default BasicExample;