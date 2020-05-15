import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import STEM from '../images/STEM.jpg'


class Home extends React.Component {
 
  render() {
    return (
      <React.Fragment>
             <header className="App-header">
      
      {/* React/Bootstrap JumboTron - homepage */}
      <Jumbotron className="Home-Jumbotron-1 bg-info text-white">
  <h1 className="Home-WyleTech">Wyle-Tech Software Solutions</h1>
  <p className="Home-page-about">
  Our talented, fully in-house, team of US-based,software developers<br></br>  create software products, applications,  <br></br>and any other software solutions to accomodate your business needs. 

<p>
<br></br>
  <Link to="/book">
    <Button className="glow-on-hover">Book Our Services</Button>
    </Link>
    </p>
  </p>
  <p>
 
  </p>
</Jumbotron>
 {/* React/Bootstrap JumboTron#2 - homepage */}
 <Jumbotron className="Home-Jumbotron-2 bg-info text-left">

  <h1 className="Home-page-let-us">Let US build it for YOU!</h1>

  <p className="Home-page-let-us">
   Let us handle your project!
  </p>
  
  <p>
  <Link to="/book">
    <Button className="glow-on-hover-2">Book Our Services</Button>
    </Link>
  </p>
</Jumbotron>

</header>
      </React.Fragment>
    );
  }
}

export default Home;
