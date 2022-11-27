import React from 'react';
import resume from '../../assets/resume.pdf';
import 'bootstrap/dist/css/bootstrap.css';

const downloadResume = () => {
  // using Java Script method to get PDF file
  fetch(resume).then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Resume - Michael Martens.pdf';
          alink.click();
      })
  })
}

const buttonClass = 'btn btn-light';

function Resume(props) {
  return (
    <section id='resume' className='pageSection resume'>
    <h2>Resume</h2>
    <p><button class={buttonClass} onClick={downloadResume} >Download</button>
    <p />
    <h4>Proficiencies</h4>
    <p>Frontend:<br />HTML, CSS, Javascript, JQuery, Responsive & Semantic Design, React, Bootstrap</p>
    <p>Backend:<br />APIs (REST & GraphQL), Node, Express, MySQL, MongoDB/Mongoose, MERN, Kubernetes, Jenkins</p>
</p>
    </section>
  )
}

Resume.propTypes = {}

export default Resume
