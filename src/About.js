import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router'
import { BrowserRouter as Router, Route, IndexRedirect } from 'react-router-dom';

class About extends Component {
    constructor(props) {
      super(props);
    }

    render(){
        return (
            <div>
            <h2>About Hello world</h2>
          </div>
        );
    }
}

export default About;