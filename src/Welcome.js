import React, { Component } from 'react';
import logo from './logo.svg';

class Welcome extends Component {
    constructor(props){
        super(props);
    }
   
    render() {
        // return <h1>Hello, {this.props.name}</h1>;
        return <h1>Hello, {this.props.name}</h1>;
      }
}

export default Welcome;

// import React from 'react';
// import ReactDOM from 'react-dom';

// function Contacts() {
//     return <h1>tel:182012322**</h1>
// }
// function Chat() {
//     return <span>chat content</span>
// }

// function SplitPanel(props) {
//     return (
//         <div className="SplitPane">
//             <div className="SplitPane-left">
//                 {props.left}
//             </div>
//             <div className="SplitPane-right">
//                 {props.right}
//             </div>
//         </div>
//     )
// }

// function App() {
//     return (
//         <SplitPanel left={<Contacts />} right={<Chat />}/>
//     );
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );