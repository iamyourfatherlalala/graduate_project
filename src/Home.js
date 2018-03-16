import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import fetch from 'isomorphic-fetch';
import { browserHistory, Redirect } from 'react-router'
import { BrowserRouter as Router, Route, IndexRedirect, Link} from 'react-router-dom';
import { Menu, Segment, Sidebar } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import About from './About';
import Exam_room_management from './Exam_room_management';
import {Login} from './Login';
import PropTypes from 'prop-types';

const colors = [
  'teal','blue', 
]

// componentWillMount() {

//}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeItemMenu: 'signout',
      activeItemNav: 'exam_room_management'
    }
  }

  static propTypes = {
    color: PropTypes.string,
  }

  handleMenuClick = (e, { name }) => {this.setState({ activeItemMenu: name });
  //history.push("/");
}

  handleNavClick = (e, { name }) => this.setState({ activeItemNav: name })

  render() {
    const { color } = this.props
    const { activeItemMenu, activeItemNav } = this.state
    return (
      <Router>
    <div className="main">
      <div className="menubar">
  
     <Menu color={colors[1]} key={colors[1]} inverted widths={2}>
       <Menu.Item>
         Exam Management System
       </Menu.Item>

         <Menu.Menu position='right'>
          <Menu.Item name='signout' active={activeItemMenu === 'signout'} onClick={this.handleMenuClick}>
           Sign Out
          </Menu.Item>

          <Menu.Item name='help' active={activeItemMenu === 'help'} onClick={this.handleMenuClick}>
           Help
          </Menu.Item>
        </Menu.Menu>
     </Menu> 
    
    </div>

      
     <div className="overview">
    <div className="navigation">
  
    <Sidebar as={Menu} width='thin' visible={true} icon='labeled' vertical inverted>
    <Menu.Item as={Link} to='/exam_room_management' name='exam_room_management' active={activeItemNav === 'exam_room_management'} onClick={this.handleNavClick}>exam-room management</Menu.Item>
    <Menu.Item as={Link} to='/about' name='about' active={activeItemNav === 'about'} onClick={this.handleNavClick}>about</Menu.Item>
    </Sidebar>
 
    </div>

    <div className="table">>
  
    <Route path="/exam_room_management" exact component={Exam_room_management} />
    <Route path="/about" exact component={About} />
   {/* <Route path="/" exact component={Login} /> */}
    </div>

    </div>


</div>
</Router>


 
    )
  }

}

export default Home;
