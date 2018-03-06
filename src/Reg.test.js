import React from 'react';
import ReactDOM from 'react-dom';
import Reg from './Reg';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reg />, div);
  ReactDOM.unmountComponentAtNode(div);
});
