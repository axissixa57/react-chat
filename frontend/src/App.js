import React from 'react';
import { Route } from 'react-router-dom';

import { Auth, Home } from './pages';

class App extends React.Component {
  render() {
    // если не добавить '/register', то она не загрузится например
    return (
      <div className="wrapper">
        <Route exact path={['/', '/login', '/register']} component={Auth} />
        <Route exact path='/im' component={Home} />
      </div>
    );
  }
}

export default App;
