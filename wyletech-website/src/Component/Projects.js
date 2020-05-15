import React from "react";
import { Link } from "react-router-dom";
import CardDeck from "react-bootstrap/CardDeck";
import Card from 'react-bootstrap/Card';
import ReactLogo from '../images/ReactLogo.png';
import AngularLogo from '../images/Angular.png';

//import CardColumns from "react-bootstrap/CardColumns";

const Projects = () => (
  <React.Fragment>
    <header className="page-header">
      <h1 className="About-Us-Title mx-auto text-center col-lg-9 my-5"> Work we've done </h1>
    </header>

    {/* React Bootstrap Project examples */}
    <CardDeck>
  <Card>
    <Card.Img variant="top" src={ReactLogo} style= {{height: 500}}/>
    <Card.Body>
      <Card.Title className="Card-Titles text-center">React and Java Build</Card.Title>
      <Card.Text> 
        <a className="Project-names" href=
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
      <a className="Project-names" href=
      "http://name-game.us-west-1.elasticbeanstalk.com/aboutUs"> Name Game
        </a>
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>

  </Card>
</CardDeck>
  </React.Fragment>
);

export default Projects;