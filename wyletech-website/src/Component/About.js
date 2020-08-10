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
        <p className="Body-P">
          <a className="Body-A" href="">
            Creative Software Engineers </a>

          <img className="Phone-App" src={PhoneApp} alt="PhoneApp.jpg" />
          <img className="Cozy" src={Cozy} alt="Cozy.jpg" />

        </p>


        <Jumbotron className="Home-Jumbotron-3 bg-info text-white">
        </Jumbotron>

      </header>
    </body>
  </React.Fragment>
);

export default About;