import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router'
import { BrowserRouter as Router, Route, IndexRedirect, Link} from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import About from './About';
import Exam_room_management from './Exam_room_management';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
    <div>
      <div>
     <Menu>
        <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
          Browse
        </Menu.Item>

         <Menu.Menu position='right'>
          <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
           Sign Up
          </Menu.Item>

          <Menu.Item name='help' active={activeItem === 'help'} onClick={this.handleItemClick}>
           Help
          </Menu.Item>
        </Menu.Menu>
     </Menu> 
    </div>


     <div className="container">
    <div className="navigation">
  
    <Menu pointing vertical>
     <Menu.Menu>
    <Menu.Item as={Link} to='/exam_room_management'>exam-room management</Menu.Item>
    <Menu.Item as={Link} to='/about'>about</Menu.Item>
    <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
    <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
    </Menu.Menu>
    </Menu>
    </div>

    <div className="table">>
    <Route path="/exam_room_management" component={Exam_room_management} />
    <Route path="/about" component={About} />
    </div>

    </div>


</div>
////////////////////////////////////////////////////////////////////

//   <div className="container">
//      <Menu>
//         <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
//           Browse
//         </Menu.Item>

//          <Menu.Menu position='right'>
//           <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
//            Sign Up
//           </Menu.Item>

//           <Menu.Item name='help' active={activeItem === 'help'} onClick={this.handleItemClick}>
//            Help
//           </Menu.Item>
//         </Menu.Menu>
//      </Menu> 
    

//     <div className="navigation">
  
//     <Menu pointing vertical>
//      <Menu.Menu>
//     <Menu.Item as={Link} to='/exam_room_management'>exam-room management</Menu.Item>
//     <Menu.Item as={Link} to='/about'>about</Menu.Item>
//     <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
//     <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
//     </Menu.Menu>
//     </Menu>
//     </div>

//     <div className="table">>
//     <Route path="/exam_room_management" component={Exam_room_management} />
//     <Route path="/about" component={About} />
//     </div>
//  </div>
 
    )
  }

}

export default Home;
