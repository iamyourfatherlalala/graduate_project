import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from './Login';
import Home from './Home';
import Exam_room_management from './Exam_room_management';
import About from './About';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';

ReactDOM.render(
    // <Router>
    //     <div>
    //       <Route path="/" component={Login} />
    //       <Route exact path="/home" component={Home} />   
    //     </div>
       
    // </Router>
 
    <Router>
       <Switch>
           <Route path="/" exact component={Login} />
           <Route path="/home" exact component={Home} />   
            {/* <Route path="/exam_room_management" component={Exam_room_management} />
           <Route path="/about" component={About} /> */}
            
       </Switch>
      
     </Router>

    , document.getElementById('root'));

registerServiceWorker();
