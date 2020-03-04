import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

class Home extends React.Component {
 
  render() {
    return (
      <React.Fragment>
             <header className="App-header">
      
      {/* React/Bootstrap JumboTron - homepage */}
      <Jumbotron className="Home-Jumbotron-1 bg-info text-white">
  <h1 className="Home-WyleTech">Wyle-Tech Software Solutions</h1>
  <p>
  Our talented, fully in-house, team of US-based, software developers create software products, apps, and any other software solutions to accomodate your business needs. 
  </p>
  <p>
  <Link to="/book">
    <Button className="glow-on-hover">Book Our Services</Button>
    </Link>
  </p>
</Jumbotron>

 {/* React/Bootstrap JumboTron#2 - homepage */}
 <Jumbotron className="Home-Jumbotron-2  text-right container-fluid ">

 {/* <Col xs={6} md={4}>
  <Image className="code-img" src="../images/code.jpg" rounded />
  </Col> */}
   
   {/* <img className="code-img img-thumbnail float-left max-width: 100px " src="../images/code.jpg" alt="Responsive image" ></img> */}
  
  <h1>Let US build it for YOU!</h1>

  <p>
   Let us handle your project!
  </p>
  
  <p>
  <Link to="/book">
    <Button className="glow-on-hover">Book Our Services</Button>
    </Link>
  </p>
</Jumbotron>

</header>
      </React.Fragment>
    );
  }
}

export default Home;
