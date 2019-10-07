import React from 'react';
import { Route } from 'react-router-dom';

import { Auth, Home, Max, Office } from './pages';

class App extends React.Component {
  render() {
    // если не добавить '/register', то она не загрузится например
    return (
      <div className="wrapper">
        <Route exact path={['/', '/login', '/register']} component={Auth} />
        <Route exact path='/im' component={Home} />
        <Route exact path='/max' component={Max} />
        <Route exact path='/office' component={Office} />
      </div>
    );
  }
}

export default App;