import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Login } from './Login';
import Home from './Home';
import Exam_room_management from './Exam_room_management';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, IndexRedirect } from 'react-router-dom';

ReactDOM.render(
    <Router>
        {/* <div>
          <Route path="/" component={Login} />
          <Route exact path="/home" component={Home} />   
        </div> */}
             <Home />
            
    </Router>


    , document.getElementById('root'));

registerServiceWorker();
