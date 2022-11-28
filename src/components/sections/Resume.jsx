import React from 'react';
import resume from '../../assets/resume.pdf';
import 'bootstrap/dist/css/bootstrap.css';
import TopButton from '../TopButton';

const downloadResume = () => {
  // using Java Script method to get PDF file
  fetch(resume).then(response => {
      // Create a new blob (file-like object)
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

const styles = {
  download: {
    marginBottom: '25px'
  }
}

function Resume(props) {
  return (
    <>
    <section id='resume' className='pageSection resume'>
    <h2>Resume</h2>
    <section>
    <button style={styles.download} className={buttonClass} onClick={downloadResume} >Download</button>
    <br />
    <section><h4>Proficiencies</h4></section>
    <section>Frontend:<br />HTML, CSS, Javascript, JQuery, Responsive & Semantic Design, React, Bootstrap</section>
    <br />
    <section>Backend:<br />APIs (REST & GraphQL), Node, Express, MySQL, MongoDB/Mongoose, MERN, Kubernetes, Jenkins</section>
    </section>
    <TopButton />
    </section>
    </>
  )
}

Resume.propTypes = {}

export default Resume
