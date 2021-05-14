import { registerRootComponent } from 'expo';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Karta from   './Karta';


ReactDOM.render(
  (
      <Router>
              <Switch>
                  {/* <Route exact path="/Karta" component={Karta}/> */}
                  <App></App>
              </Switch>
      </Router>
  ),
  document.getElementById('root')
);


