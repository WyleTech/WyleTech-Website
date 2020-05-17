import React from "react";
import { Link } from "react-router-dom";
import CardDeck from "react-bootstrap/CardDeck";
import Card from 'react-bootstrap/Card';
import ReactLogo from '../images/ReactLogo.png';
import AngularApi from '../images/AngularApi.jpg';
import JavaReact from '../images/JavaReact.png';
import RilDilSnip from '../images/RilDilSnip.jpg';
import NameGame from '../images/NameGame.jpg';
//import CardColumns from "react-bootstrap/CardColumns";

const Projects = () => (
  <React.Fragment>
    <body className="Projects-Body ">
      <header className="App-header">
        <h1 className="Our-Creations-Title">Our Creations</h1>

        {/* React Bootstrap Project examples */}
        <CardDeck>
          <Card>
            <br></br>
            <Card.Img variant="top" src={RilDilSnip} style={{ height: 250, width: 610 }} />
            <br></br>
            <Card.Img variant="top" src={JavaReact} style={{ height: 250, width: 610 }} />
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
            <br></br>
            <Card.Img variant="top" src={NameGame} style={{ height: 250, width: 610 }} />
            <br></br>
            <Card.Img variant="top" src={AngularApi} style={{ height: 250, width: 610 }} />
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
      </header>
    </body>

  </React.Fragment>
);

export default Projects;