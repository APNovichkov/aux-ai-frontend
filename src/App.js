import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import './App.css';

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Create from "./pages/create";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Switch>
          <div>
            <Navbar/>
            <div className="app-content">
              <Route path="/" exact component={Home}></Route>
              <Route path="/create" exact component={Create}/>
            </div>
            <Footer/>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
