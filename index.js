import { registerRootComponent } from 'expo';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App';
import Karta from './src/components/Karta';
import Calendario from './src/components/Calendario';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Teste from './src/components/Teste';


ReactDOM.render(
  (
      <Router>
              <Switch>
                { <Route exact path="/Teste" component={Teste}/> }
                  { <Route exact path="/Calendario" component={Calendario}/> }
                  { <Route exact path="/Karta" component={Karta}/> }
                  { <Route exact path="/App" component={App}/> }
                  <App></App>
              </Switch>
      </Router>
  ),
  document.getElementById('root')
);


