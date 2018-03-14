import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import './Login.css';
import fetch from 'isomorphic-fetch';
import { Redirect } from 'react-router-dom'

let token = '';

class Login extends Component {
  name;
  password;
  constructor(props) {
    super(props);
    this.state = {
      loginSuccess: false
    }
  }

  async signIn(e) {
    e.preventDefault(); //in case of the loop
    let data = {
      name: this.name.value,
      password: this.password.value,          //props
    }
    let url = `http://58.196.130.215/EMS/greeting?name=${data.name}&password=${data.password}`
    const response = await fetch(url);
    const result = await response.json();
    token = result.token;
    if (token) {
      this.setState({ loginSuccess: true });
    }
    console.log(token);
  }

  render() {
    console.log(this.state.loginSuccess);
    if (!this.state.loginSuccess) {
      return (
        <div className="Background">
        <div className="page-header page-custom">
          <h1>Examination Management System</h1>
        </div>
        <div class="row" height="80%">
          <form onSubmit={(e) => this.signIn(e)}>
          <div>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="username"
              ref={input => this.name = input} />
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="text"
              placeholder="password"
              ref={input => this.password = input} />
          </div>
          <button className="blue">Sign in</button>
          </form>
          </div>
        </div>
      );
    } else {
      return <Redirect to='/home' />
    }
  }
}

export {Login, token};

