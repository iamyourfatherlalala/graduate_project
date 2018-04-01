import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('LoginStore')
@observer
class App extends Component {
    render() {
        return <h1>lalalalalalal</h1>
    }
}

export default App;