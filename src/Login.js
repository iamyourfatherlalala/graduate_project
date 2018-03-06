import React, { Component } from 'react';
import logo from './logo.svg';
import './Reg.css';
import fetch from 'isomorphic-fetch';
import { Redirect } from 'react-router-dom'

class Login extends Component {
  name;
  password;
  constructor(props) {
    super(props);
    this.state = {
      loginSuccess: false
    }
  }

  signIn(e) {
    e.preventDefault(); //in case of the loop
    let data = {
      name: this.name.value,
      password: this.password.value,          //props
    }
    let url = `http://58.196.130.215/EMS/greeting?name=${data.name}&password=${data.password}`
    let tmpurl = 'www.baidu.com'
    fetch(tmpurl, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(data)          //does not need body in 'GET' request
    }).then(
      (res) => {
        // const path = `/reg/${this.name.value}/${this.password.value}`
        this.setState({ loginSuccess: true});
      }
    )
      .catch(function (error) {
        console.log(error);
        alert('request failed');
      })
  }

  render() {
    console.log(this.state.loginSuccess);
    if (!this.state.loginSuccess) {
      return (
        <form onSubmit={(e) => this.signIn(e)}>
          <div>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="username"
              ref={input => {
                if (input !== null) {
                  this.name = input
                }
              }}
            />
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="text"
              placeholder="password"
              ref={input => this.password = input} />
          </div>
          <button>Sign in</button>
        </form>
      );
    } else {
      return <Redirect to='/reg' />
    }
  }
}

export default Login;

