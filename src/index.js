import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Login } from './Login';
import Home from './Home';
// import Props from './Props';
// import ListItems from './ListItems';
// import NameForm from './NameForm';




import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, IndexRedirect } from 'react-router-dom';




//const Numbers = [1,2,3,4,5,6,7,8,9,10];

//ReactDOM.render(<Reg />, document.getElementById('root'));
//ReactDOM.render(<Props />, document.getElementById('root'));
//ReactDOM.render(<ListItems numbers={Numbers} />, document.getElementById('root'));
//ReactDOM.render(<NameForm />, document.getElementById('root'));
ReactDOM.render(
    <Router>
        <div>
          <Route path="/" component={Login} />
          <Route exact path="/home" component={Home} />   
        </div>
    </Router>, document.getElementById('root'));

registerServiceWorker();
