import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Reg from './Reg';
import Props from './Props';
import ListItems from './ListItems';
import NameForm from './NameForm';
import Login from './Login';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, IndexRedirect } from 'react-router-dom';




//const Numbers = [1,2,3,4,5,6,7,8,9,10];

//ReactDOM.render(<Reg />, document.getElementById('root'));
//ReactDOM.render(<Props />, document.getElementById('root'));
//ReactDOM.render(<ListItems numbers={Numbers} />, document.getElementById('root'));
//ReactDOM.render(<NameForm />, document.getElementById('root'));
ReactDOM.render(
    <Router>
        {/* <Route path="/" component={Login}>
            <Route path="reg" component={Reg} />
        </Route> */}
        <div>
          <Route path="/" component={Login} />
          <Route path="/reg" component={Reg} />
        </div>
    </Router>, document.getElementById('root'));

registerServiceWorker();
