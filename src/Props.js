import React, { Component } from 'react';
import logo from './logo.svg';
import Welcome from './Welcome';

class Props extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
        );
    }
    
}

export default Props;