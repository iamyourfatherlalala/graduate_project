import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import './Login.css';
import Home from './Home';
import fetch from 'isomorphic-fetch';
import { Redirect } from 'react-router-dom'
import { Button, Segment, Input, Container, Header } from 'semantic-ui-react'

let token = '';
const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']


class Login extends Component {
  // name;
  // password;
  constructor(props) {
    super(props);
    this.state = {
      loginSuccess: false,
      name: '',
      password: ''
    }
  }

  onChange = (e) => {
   const { name, value } = e.target;
   this.setState({ [name]: value });
  }

  signIn = async () => {
     // e.preventDefault(); //in case of the loop
    // let data = {
    //   name: this.name.value,
    //   password: this.password.value,          //props
    // }
    const data = {
      name: this.state.name,
      password: this.state.password,         
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
    const { name, password } = this.state;
    console.log(this.state.loginSuccess);
    if (!this.state.loginSuccess) {
      return (
        <Container text>
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
      return <Redirect to='/home' />
      // return <Redirect from='/' to='/home'/>
    }
  }
}

export {Login, token};

