import React from 'react';
import './App.css';
import Home from "./Component/Home";
import Projects from "./Component/Projects";
import Book from "./Component/Book";
import About from "./Component/About";
import NoMatch from "./Component/NoMatch";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="bg-dark">
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} /> 
            <Route exact path="/projects" component={Projects} />  
            <Route exact path="/book" component={Book} />  
            <Route exact pathe="/404" component={NoMatch} />
          </Switch>
          {/* <Footer2></Footer2> */}
        </Router>
      </div>
    );
  }
}

export default App;
