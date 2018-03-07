import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router'
import { BrowserRouter as Router, Route, IndexRedirect } from 'react-router-dom';
import { token } from './Login';

class Exam_room_management extends Component {
    constructor(props) {
        super(props);
        this.states = {
            exam_conditions : []
        }
    }

    async handleButton() {
        const response = await fetch(`http://58.196.130.215/EMS/admin/roomLists?token=${token}`);
        const result = await response.json();
        console.log(result[0].id);
       // this.tests = JSON.parse(JSON.stringify(result));
        // this.tests = result;
        console.log(this.tests);
    }

    render() {
        if (!this.tests[0]) {
            return (
                <button onClick={this.handleButton}>give out papers</button>
            );
        } else {
            return (
                <div>
                    {this.state.tests}
                </div>
            )
        }
    }
}

export default Exam_room_management;