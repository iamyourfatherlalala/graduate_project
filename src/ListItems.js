import React, { Component } from 'react';
import logo from './logo.svg';

class ListItems extends Component {
    constructor(props){
        super(props);
    }
   
    render() {
        const numbers = this.props.numbers.map((number) =>
        <li key={number.id}>
           {number*2}
        </li>
    );
    return (<ul>{numbers}</ul>);
}
}

export default ListItems;