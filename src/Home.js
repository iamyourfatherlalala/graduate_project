import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router'
import { BrowserRouter as Router, Route, IndexRedirect, Link} from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import About from './About';
import Exam_room_management from './Exam_room_management';
import PropTypes from 'prop-types';

const colors = [
  'teal','blue', 
]

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeItemMenu: 'signup',
      activeItemNav: 'exam_room_management'
    }
  }

  static propTypes = {
    color: PropTypes.string,
  }

  handleMenuClick = (e, { name }) => this.setState({ activeItemMenu: name })

  handleNavClick = (e, { name }) => this.setState({ activeItemNav: name })

  render() {
    const { color } = this.props
    const { activeItemMenu, activeItemNav } = this.state
    return (
    <div className="main">
      <div className="menubar">
  
     <Menu color={colors[1]} key={colors[1]} inverted widths={2}>
       <Menu.Item>
         Exam Management System
       </Menu.Item>

         <Menu.Menu position='right'>
          <Menu.Item name='signup' active={activeItemMenu === 'signup'} onClick={this.handleMenuClick}>
           Sign Out
          </Menu.Item>

          <Menu.Item name='help' active={activeItemMenu === 'help'} onClick={this.handleMenuClick}>
           Help
          </Menu.Item>
        </Menu.Menu>
     </Menu> 
    
    </div>


     <div className="container">
    <div className="navigation">
    <Menu pointing vertical>
     <Menu.Menu>
    <Menu.Item as={Link} to='/exam_room_management' name='exam_room_management' active={activeItemNav === 'exam_room_management'} onClick={this.handleNavClick}>exam-room management</Menu.Item>
    <Menu.Item as={Link} to='/about' name='about' active={activeItemNav === 'about'} onClick={this.handleNavClick}>about</Menu.Item>
    </Menu.Menu>
    </Menu>
    </div>

    <div className="table">>
    <Route path="/exam_room_management" component={Exam_room_management} />
    <Route path="/about" component={About} />
    </div>

    </div>


</div>


 
    )
  }

}

export default Home;
