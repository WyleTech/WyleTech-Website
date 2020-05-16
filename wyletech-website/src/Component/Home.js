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
      <Jumbotron className="Home-Jumbotron-1 bg-info">
  <h1 className="Jumbo-Title-1">Wyle-Tech Software Solutions</h1>
  <p className="Content-1">
  Our talented, fully in-house, team of US-based, software developers<br></br>  create software products, applications, and any other<br></br> software solutions to accomodate your business needs. 

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

  <h1 className="Jumbo-Title-2">Let <b>US</b> build it for <b>YOU</b>!</h1>

  <p className="Content-2">
   Check out our previous clients and projects.
  </p>
  
  <p>
  <Link to="/projects">
    <Button className="glow-on-hover-2">Previous Projects</Button>
    </Link>
  </p>
</Jumbotron>

</header>
      </React.Fragment>
    );
  }
}

export default Home;
