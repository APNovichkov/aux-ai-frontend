import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import './App.css';

// Import Pages
import Home from "./pages/home";
import Create from "./pages/create";
import About from "./pages/about";

// Import Components
import Navbar from "./components/navbar";
import Footer from "./components/footer";


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
              <Route path="/about" exact component={About}></Route>
            </div>
            <Footer/>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
