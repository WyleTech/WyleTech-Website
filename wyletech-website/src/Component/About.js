import React from "react";
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import PhoneApp from '../images/PhoneApp.jpg'
import Cozy from '../images/Cozy.jpg'

const About = () => (
  <React.Fragment>
    <body className="About-Body">
      <header className="page-header">

        {/* Body-A and Body-P specifically tie to the bright, glowing Orange CSS styling */}
        <div className="Body-P">
          <a className="Body-A" href=""> <p>Creative Software Engineers</p></a>

          <h1 className="YourIdeas-Title text-success">You think of the idea....</h1>
          <img className="Cozy" src={Cozy} alt="Cozy.jpg" /> 

          <h1 className="WeCode-Title text-success"> We code it into reality!</h1>
          <img className="Phone-App" src={PhoneApp} alt="PhoneApp.jpg" /> 
        </div>

      </header>
    </body>
  </React.Fragment>
);

export default About;