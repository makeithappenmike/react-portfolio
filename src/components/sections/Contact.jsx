import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import TopButton from '../TopButton';

function ContactForm() {
  
  const buttonClass = 'btn btn-light';
  const styles = {
    field: {
        marginBottom: '10px'
    }
  }

  // Set validation state
  const [validated, setValidated] = useState(false);
  
  // Define email field for blur handling
  const emailField = document.querySelector('#emailField');

  // Handle submit
  const handleSubmit = (event) => {
  const form = event.currentTarget;
  
  // If everything is valid
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    alert('Uh oh! Looks like there are errors you need to fix.');
  } else {
    // Reset the form
    form.reset();
    setValidated(true);
    alert('Thanks for submitting!');
}

setValidated(true);
};

// Handle blur (leaving the Email input field empty)
const handleEmailBlur = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  setValidated(true);
};

// Handle blur (leaving the Message input field empty)
const handleMessageBlur = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  setValidated(true);
};

  return (
      <>
      <h2>Contact</h2>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className='mb-3'>
        <Form.Group as={Col} md='4' controlId='validationCustom01'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='First name'
            style={styles.field}
          />
          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
        </Form.Group>
        <Form.Group as={Col} md='4' controlId='validationCustom02'>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Last name'
          />
          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label id='emailField'>Email Address</Form.Label>
        <Form.Control
        required
        hasvalidation='true'
        type='email'
        placeholder='name@example.com'
        onBlur={handleEmailBlur}
           />
        <Form.Control.Feedback type='invalid'>
              Please use a valid Email Address.
            </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Message</Form.Label>
        <Form.Control
        required
        hasvalidation='true'
        as='textarea'
        placeholder='Message'
        onBlur={handleMessageBlur}
        rows={3} />
        <Form.Control.Feedback type='invalid'>
              Please include a message.
            </Form.Control.Feedback>
      </Form.Group>
      <Button type='submit' className={buttonClass}>Submit form</Button>
      </Row>
    </Form>
    <TopButton />
    <p></p>
    </>
  );
}

export default ContactForm;