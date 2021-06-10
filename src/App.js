import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Main from "./components/pages/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/main" exact component={Main}></Route>
          <Route path="/about" exact component={About}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
