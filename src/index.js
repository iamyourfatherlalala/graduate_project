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
import { Provider } from 'mobx-react';

import { LoginStore } from './stores/LoginStore';

const Root = (
    // <Provider >
    //     <Router>
    //    <Switch>
    //        {/* <Route path="/" exact component={Login} />
    //        <Route path="/home" exact component={Home} />    */}
    //         {/* <Route path="/exam_room_management" component={Exam_room_management} />
    //        <Route path="/about" component={About} /> */}
    //        <Login />
    //    </Switch>
      
    //  </Router>
    // </Provider>
    <Provider LoginStore={LoginStore}>
      <App />
    </Provider>
);

ReactDOM.render(Root,document.getElementById('root'));

registerServiceWorker();
