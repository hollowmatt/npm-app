import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import Day from './components/day.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Charlotte's Web </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/howday'} className="nav-link">How is your Day?</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Switch>
            <Route exact path='/create' component={ Create } />
            <Route exact path='/edit/:id' component={ Edit } />
            <Route exact path='/index' component={ Index } />
            <Route exact path='/howday' component= { Day } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
