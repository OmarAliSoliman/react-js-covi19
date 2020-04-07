import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Logo from './images/logo-2.png';
import "../src/css/syle.css";

// pages
import Home from './pages/Home';
import About from './pages/About';
import CountryInfo from './pages/CountryInfo';
import ErrorPage from './pages/Errror';



class App extends Component {

  render(){
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/"><img src={Logo} width="30px" alt="logo" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/countryInfo/:id" exact component={CountryInfo} />
            <Route path="/about" exact component={About} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
