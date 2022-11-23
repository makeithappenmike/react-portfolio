import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import placeholder from '../assets/placeholder.png';

const styles = {
  project: {
    width: '18rem',
    margin: '10px'
  },
  image: {
    width: '100%',
    marginTop: '10px'
  }
};

function BasicExample() {
  return (
    <>
      <section className='portfolio' id='portfolio'>

      {/* Project One */}
      <Row xs={1} md={2} className="g-4 justify-content-center">
      <Card style={styles.project} className="project">
        <Card.Img variant="top" src={placeholder} style={styles.image} />
        <Card.Body bg='secondary'>
          <Card.Title bg='primary' as='h4'>Project One</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      {/* Project Two */}
      <Card style={styles.project} className="project">
      <Card.Img variant="top" src={placeholder} style={styles.image} />
      <Card.Body bg='secondary'>
        <Card.Title bg='primary' as='h4'>Project Two</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    {/* Project Three */}
    <Card style={styles.project} className="project">
    <Card.Img variant="top" src={placeholder} style={styles.image} />
    <Card.Body bg='secondary'>
      <Card.Title bg='primary' as='h4'>Project Three</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>

  {/* Project Four */}
  <Card style={styles.project} className="project">
    <Card.Img variant="top" src={placeholder} style={styles.image} />
    <Card.Body bg='secondary'>
      <Card.Title bg='primary' as='h4'>Project Four</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </Row>

  </section>
</>
  );
}

export default BasicExample;