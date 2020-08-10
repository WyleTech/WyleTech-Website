import React from "react";
import { Link } from "react-router-dom";
import CardDeck from "react-bootstrap/CardDeck";
import Card from 'react-bootstrap/Card';
import AngularApi from '../images/AngularApi.jpg';
import JavaReact from '../images/JavaReact.png';
import RilDilSnip from '../images/RilDilSnip.jpg';
import NameGame from '../images/NameGame.jpg';
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
//import CardColumns from "react-bootstrap/CardColumns";

const Projects = () => (
  <React.Fragment>
    <body className="Projects-Body ">
      <h1 className="Creations-Title">Our Creations</h1>
      {/* React Bootstrap Project examples */}
      <CardDeck >
         {/* Card 1 */}
        <Card className="Card-1 bg-info">
          <br></br>
          <Card.Img variant="top" src={RilDilSnip} style={{ height: 250, width: 610 }} />
          <Card.Body>
             {/**CSS Card.Title note** won't style "className" (on CSS) like normal react, likely because it's a react/bootstrap listgroup - would only style under "class" */}
            <Card.Title class= "Card-1-Title bg-dark text-white text-xl-center">Ril Dil Food-Truck Website</Card.Title> 
            <Card.Text className= "bg-dark text-white text-center">
              Tools: Java, MYSQL, Amazon Web Services AWS, Google API, HTML/CSS/React/Bootstrap, Form Validation. 
    </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush bg-info">
            <ListGroupItem className="bg-dark text-white">Responsive Menu - Photo Carousel </ListGroupItem>
            <ListGroupItem className="bg-dark text-white">Google Maps API for Food Truck Locator</ListGroupItem>
            <ListGroupItem className="bg-dark text-white">React/Bootstrap Form for Client Booking</ListGroupItem>
            <ListGroupItem className="bg-dark text-white">Admin login for Owner - Add/Remove Menu Items/Photos, Input GPS Coordinates for Food Truck Locator, Maintain database of client booking/contact info</ListGroupItem>
          </ListGroup>
          <br></br>
          <Card.Img variant="top" src={JavaReact} style={{ height: 250, width: 610 }} />
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body>
        </Card >

        {/* Card 2 */}
        <Card className="Card-2 bg-info">
        <br></br>
          <Card.Img variant="top" src={NameGame} style={{ height: 250, width: 610 }} />
          <br></br>
        
          <Card.Body>
             {/**CSS Card.Title note** won't style "className" (on CSS) like normal react, likely because it's a react/bootstrap listgroup - would only style under "class" */}
            <Card.Title class= "Card-2-Title bg-dark text-white text-xl-center"><a href= "http://name-game.us-west-1.elasticbeanstalk.com/aboutUs"> Name Game </a></Card.Title> 
            <Card.Text className= "bg-dark text-white text-center">
              Tools: Angular Build with API consumption
    </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush bg-info">
            <ListGroupItem className="bg-dark text-white">Angular </ListGroupItem>
            <ListGroupItem className="bg-dark text-white">API Consumption</ListGroupItem>
            <ListGroupItem className="bg-dark text-white"> add text </ListGroupItem>
            <ListGroupItem className="bg-dark text-white"> add text </ListGroupItem>
            <ListGroupItem className="bg-dark text-white"> add text </ListGroupItem>
          </ListGroup>
          <br></br>
          <Card.Img variant="top" src={AngularApi} style={{ height: 250, width: 610 }} />
          <Card.Body>
            <Card.Link href="#"></Card.Link>
          </Card.Body>
        </Card >

      {/* Card 3 */}
        <Card className="Card-3 bg-info">
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title className="Card-Titles">Check out our Github</Card.Title>
            <Card.Text>

              <a className="Project-names text-danger" href=
                "https://github.com/WyleTech"> WyleTech Github
        </a>
            </Card.Text>
          </Card.Body>
        </Card>

      </CardDeck>
    </body>

  </React.Fragment>
);

export default Projects;