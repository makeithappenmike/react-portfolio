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

const styles = {
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
    width: '100%'
  }
};

const buttonClass = 'btn btn-dark';

function BasicExample() {
  return (
    <>
      <section className='portfolio' id='portfolio'>

      {/* Project One */}
      <Row xs={1} md={2} className="g-4 justify-content-center">
      <Card style={styles.project} className="project">
        <Card.Img variant="top" src={have_a_marvelous_time} style={styles.image} />
        <Card.Body bg='secondary'>
          <Card.Title bg='primary' as='h4'>Have a Marvelous Time</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <a class={buttonClass} target='blank' href="https://makeithappenmike.github.io/have-a-marvelous-time/" role="button">Visit the App</a>
          <a class={buttonClass} target='blank' href="https://github.com/makeithappenmike/have-a-marvelous-time" role="button">Visit the Repository</a>
        </Card.Body>
      </Card>

      {/* Project Two */}
      <Card style={styles.project} className="project">
        <Card.Img variant="top" src={NOVELty} style={styles.image} />
        <Card.Body bg='secondary'>
          <Card.Title bg='primary' as='h4'>NOVELty</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <a class="btn btn-primary " target='blank' href="https://novelty-book-swap.herokuapp.com/" role="button">Visit the App</a>
          <a class="btn btn-primary" target='blank' href="https://github.com/VaishaliQA/Novelty_Project" role="button">Visit the Repository</a>
        </Card.Body>
      </Card>

    {/* Project Three */}
    <Card style={styles.project} className="project">
    <Card.Img variant="top" src={password_generator} style={styles.image} />
    <Card.Body bg='secondary'>
      <Card.Title bg='primary' as='h4'>Password Generator</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
          <a class="btn btn-primary" target='blank' href="https://makeithappenmike.github.io/have-a-marvelous-time/" role="button">Visit the App</a>
          <a class="btn btn-primary" target='blank' href="https://github.com/VaishaliQA/Novelty_Project" role="button">Visit the Repository</a>
    </Card.Body>
  </Card>

  {/* Project Four */}
  <Card style={styles.project} className="project">
    <Card.Img variant="top" src={scheduling_app} style={styles.image} />
    <Card.Body bg='secondary'>
      <Card.Title bg='primary' as='h4'>Scheduling App</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <a class="btn btn-primary" target='blank' href="https://makeithappenmike.github.io/scheduling-app/" role="button">Visit the App</a>
      <a class="btn btn-primary" target='blank' href="https://github.com/makeithappenmike/scheduling-app" role="button">Visit the Repository</a>
    </Card.Body>
  </Card>

  {/* Project Five */}
  <Card style={styles.project} className="project">
    <Card.Img variant="top" src={pwa_text_editor} style={styles.image} />
    <Card.Body bg='secondary'>
      <Card.Title bg='primary' as='h4'>PWA Text Editor</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <a class="btn btn-primary" target='blank' href="https://tranquil-tundra-85451.herokuapp.com/" role="button">Visit the App</a>
      <a class="btn btn-primary" target='blank' href="https://github.com/makeithappenmike/pwa-text-editor" role="button">Visit the Repository</a>
    </Card.Body>
  </Card>

  {/* Project Six */}
  <Card style={styles.project} className="project">
    <Card.Img variant="top" src={weather_app} style={styles.image} />
    <Card.Body bg='secondary'>
      <Card.Title bg='primary' as='h4'>Weather App</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <a class="btn btn-primary" target='blank' href="https://makeithappenmike.github.io/check-your-weather-app/" role="button">Visit the App</a>
      <a class="btn btn-primary" target='blank' href="https://github.com/makeithappenmike/check-your-weather-app" role="button">Visit the Repository</a>
    </Card.Body>
  </Card>
  </Row>

  </section>
</>
  );
}

export default BasicExample;