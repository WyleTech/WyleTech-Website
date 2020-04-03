import React from "react";
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import PhoneApp from '../images/PhoneApp.jpg'
import Cozy from '../images/Cozy.jpg'

const About = () => (
  <React.Fragment>
    <body className="About-Body">
    <header className="page-header">
      {/* <h1 className="About-Us-Title mx-auto text-center col-lg-9 my-5"> A couple of creative, dedicated Software Engineers working to master our craft </h1> */}
      <p className="Body-P"><a className="Body-A" href="">
      Creative Software Engineers
      <img className="Phone-App" src={PhoneApp} alt="PhoneApp.jpg"/>
      <img className="Cozy" src={Cozy} alt="Cozy.jpg"/>
  </a></p>
 

  <Jumbotron className="Home-Jumbotron-3 bg-info text-white">
</Jumbotron>

    </header>
    </body>
  </React.Fragment>
);

export default About;