import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'; 
import TopButton from '../TopButton';
import ReactForm from 'react-bootstrap/Form';

const styles = {
  form: {
    margin: '20px',
  },
  formInput: {
    display: 'block',
    marginTop: '5px',
    marginBottom: '5px',
    width: '100%',
  }
}

const buttonClass = 'btn btn-light';

const alertMessage = 'Uh oh! First name, Last Name, Email Address and a Message are all required when using the Contact form.'

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    console.log(e.target.name);

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  const handleEmailInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'email' ? setEmail(value) : console.log('No email found');
  };

  const handleMessageInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'message' ? setMessage(value) : console.log('No message found');
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    if (firstName && lastName && email && message) {
    alert(`Thanks for the message, ${firstName}!`);
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  } else {
    alert(alertMessage);
  }
  };

  // const handleEmailBlur = (e) => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   e.preventDefault();
  //   email.match() : '';

  //   // Alert the user their first and last name, clear the inputs
  //   // alert(`Thanks for the message, ${firstName}!`);
  //   // setFirstName('');
  //   // setLastName('');
  //   // setEmail('');
  //   // setMessage('');
  // };

  return (
    <div>
      <h2>Contact</h2>
      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleEmailInputChange}
          type="text"
          placeholder="Email Address"
        />
        <ReactForm.Control.Feedback type="invalid">Please provide a valid gmail.</ReactForm.Control.Feedback>
          <ReactForm.Control.Feedback type="valid">Looks good!</ReactForm.Control.Feedback>
        <input
          value={message}
          name="message"
          onChange={handleMessageInputChange}
          type="text"
          placeholder="Message" id='messageInput'
        />
        <button className={buttonClass} type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      <TopButton />
      <p></p>
    </div>
  );
}

export default Form;
