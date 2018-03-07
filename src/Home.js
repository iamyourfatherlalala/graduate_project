import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router'
import { BrowserRouter as Router, Route, IndexRedirect, Link } from 'react-router-dom';
import About from './About';
import Exam_room_management from './Exam_room_management';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
      <div class="nav navbar-nav">
        <ul>
          <li>
            <Link to="/exam_room_management">exam room management </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <hr />
        <Route path="/exam_room_management" component={Exam_room_management} />
        <Route path="/about" component={About} />
        
      </div>
    </Router>
    );
  }

}

export default Home;
