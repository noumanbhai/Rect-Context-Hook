import './App.css';
import Navbar from './components/Navbar';
import React from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// import React from "react";
// import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );

}

export default App;