import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'



class Home extends React.Component {
 
  render() {
    return (
      <React.Fragment>
             <header className="App-header">
      
      {/* React/Bootstrap JumboTron - homepage */}
      <Jumbotron className="Home-Jumbotron bg-info">
  <h1>Wyle-Tech Software Solutions</h1>
  <p>
   Book us to address your software needs!
  </p>
  <p>
  <Link to="/book">
    <Button className="glow-on-hover">Book Our Services</Button>
    </Link>
  </p>
</Jumbotron>

 {/* React/Bootstrap JumboTron#2 - homepage */}
 <Jumbotron className="Home-Jumbotron-2 bg-success text-right">
  <h1>We are the dopest!</h1>
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
