import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import placeholder from '../assets/placeholder.png';

function BasicExample() {
  return (
    <>
      <section id='portfolio'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={placeholder} />
        <Card.Body bg='secondary'>
          <Card.Title bg='primary' as='h4'>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={placeholder} />
      <Card.Body bg='secondary'>
        <Card.Title bg='primary' as='h4'>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={placeholder} />
    <Card.Body bg='secondary'>
      <Card.Title bg='primary' as='h4'>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </section>
</>
  );
}

export default BasicExample;