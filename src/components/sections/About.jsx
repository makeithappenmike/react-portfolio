import React from 'react'
import TopButton from '../TopButton';

function About() {
  return (
    <section className='pageSection about' >
    <h2>About Me</h2>
    <span>I've been working with various forms of Developement for more than fifteen years. I love making processes more efficient, more informative, and more impactful. Whether that means designing Websites to help funnel activity into a business for the first time or taking existing Internal Tooling and building upon it. I'm proficient in front end design (HTML, CSS, current web-protocols, accessibility, etc..), Javascript/Node.js, MySQL, and working with APIs.
    <p />
    I currently work at Mailchimp as a Technical Support Engineer -- where I split my time between acting as a subject matter expert for front-line Product Support Reps and developing/maintaing/scaling internal components such as Slackbots, tooling for custom DNS lookups and incident response, and JIRA integrations.</span>
    <TopButton />
    </section>
  )
}

export default About