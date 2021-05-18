import { registerRootComponent } from 'expo';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Karta from './src/Karta';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Karta from   './Karta';


ReactDOM.render(
  (
      <Router>
              <Switch>
                  { <Route exact path="/Karta" component={Karta}/> }
                  { <Route exact path="/App" component={App}/> }
                  <App></App>
              </Switch>
      </Router>
  ),
  document.getElementById('root')
);


