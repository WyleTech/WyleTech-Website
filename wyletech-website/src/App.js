import React from 'react';
import './App.css';
import Home from "./Component/Home";
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
            {/* <Route exact path="/about" component={About} /> */}
            {/* <Route exact path="/menu" component={Menu} />  */}
            {/* <Route exact path="/contact" component={Contact} />  */}
            {/* <Route exact path="/login" component={ValidatedLoginForm} />  */}
            {/* <Route exact path="/admin" component={TabComponent} /> */}
            <Route exact pathe="/404" component={NoMatch} />
          </Switch>
          {/* <Footer2></Footer2> */}
        </Router>
      </div>
    );
  }
}

export default App;
