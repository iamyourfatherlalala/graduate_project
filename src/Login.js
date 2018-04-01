import React, { Component } from 'react';
import logo from './logo.svg';
import './Login.css';
import Home from './Home';
import fetch from 'isomorphic-fetch';
import { Redirect } from 'react-router-dom'
import { Button, Segment, Input, Container, Header } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';

let token = '';
const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']


class Login extends Component {
  // name;
  // password;
  constructor(props) {
    super(props);
    // this.state = {
    //   loginSuccess: false,
    //   name: '',
    //   password: ''
    // }
  
  }

  onChange = (e) => {
   const { name, value } = e.target;
   //this.setState({ [name]: value });
   this[name] = value;
  }

  signIn = async () => {
    // const data = {
    //   name: this.state.name,
    //   password: this.state.password,         
    // }
     const { loginSuccess, name, password } = this;

    let url = `http://58.196.130.215/EMS/greeting?name=${name}&password=${password}`
    const response = await fetch(url);
    const result = await response.json();
    token = result.token;
    if (token) {
      // this.setState({ loginSuccess: true });
      loginSuccess: true;
    }
    console.log(token);
  }

  render() {
   // const { name, password } = this.state;
   // console.log(this.state.loginSuccess);
   const { loginSuccess, name, password } = this;
    if (!loginSuccess) {
      return (
        <div className="login">
        <Container as="div" className="container" text>
        <Header as="h1" textAlign='center'>Sign In</Header>
        <Input
        icon='user'
        name="name"
        onChange={this.onChange}
        value={name}
        type="name"
        placeholder="Username" 
        fluid
        />
        <Input
        name="password"
        onChange={this.onChange}
        value={password}
        type="password"
        placeholder="Password" 
        fluid
        />
        <Button primary onClick={this.signIn} fluid>Submit</Button>
        </Container>
       </div>

///////////////////////////////////////////////////////////

        // <div className="Background">
        // <div className="page-header page-custom">
        //   <h1>Examination Management System</h1>
        // </div>
        // <div>
        //   <form onSubmit={(e) => this.signIn(e)}>
        //    <div>
        //     <input
        //       id="name"
        //       name="name"
        //       type="text"
        //       placeholder="username"
        //       ref={input => this.name = input} />
        //     </div>
        //      <div>
        //     <input
        //       id="password"
        //       name="password"
        //       type="text"
        //       placeholder="password"
        //       ref={input => this.password = input} />
        //     </div>
        //   <button className="blue">Sign in</button>
        //   </form>
        //   </div>
        // </div>
      );
    } else {
      // return <Redirect to='/home' />
      return <h1>hello world</h1>
     
    }
  }
}

 export default {Login, token};

