import React from "react";
import { Link } from "react-router-dom";
import CardDeck from "react-bootstrap/CardDeck";
import Card from 'react-bootstrap/Card';
import ReactLogo from '../images/ReactLogo.png';
import AngularLogo from '../images/Angular.png';

//import CardColumns from "react-bootstrap/CardColumns";

const Projects = () => (
  <React.Fragment>
     <body className="Projects-Body">
     <header className="App-header">
     <h1 className="Our-Creations-Title">Our Creations</h1>

    {/* React Bootstrap Project examples */}
    <CardDeck>
  <Card>
    <Card.Img variant="top" src={ReactLogo} style= {{height: 500}}/>
    <Card.Body>
      <Card.Title className="Card-Titles text-center">React and Java Build</Card.Title>
      <Card.Text> 
        <a className="Project-names text-info" href=
      "http://gcufoodtruck.us-west-1.elasticbeanstalk.com/"> Ril Dil BBQ
        </a>
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img  variant="top" src={AngularLogo} style= {{height: 500}} />
    <Card.Body>
      <Card.Title className="Card-Titles" >Angular Build with API consumption</Card.Title>
      <Card.Text>
      <a className="Project-names text-danger" href=
      "http://name-game.us-west-1.elasticbeanstalk.com/aboutUs"> Name Game
        </a>
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title className="Card-Titles">Preceptor-Point Site Build</Card.Title>
      <Card.Text>

      <a className="Project-names text-danger" href=
      "http://www.preceptorpoint.com"> Preceptor-Point
        </a>
     Site build for Preceptor-point including React/Bootstrap styling, MYSQL RDS Database on AWS, React form-validation, and Java Backend. 
      </Card.Text>
    </Card.Body>

  </Card>
</CardDeck>
</header>
</body>

  </React.Fragment>
);

export default Projects;