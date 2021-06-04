import { registerRootComponent } from 'expo';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App';
import Karta from './src/components/Karta';
import Calendario from './src/components/calendario';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Teste from './src/components/Teste';
import HopiNiver from './src/components/HopiNiver';
import AtracoesInfantis from './src/components/AtracoesInfantis';
import Servicos from './src/components/Servicos';
import Duvidas from './src/components/Duvidas';
import Gastronomia from './src/components/Gastronomia';
import Login from './src/components/Login';


ReactDOM.render(
  (
      <Router>
              <Switch>
                  { <Route exact path="/Teste" component={Teste}/> }
                  { <Route exact path="/calendario" component={Calendario}/> }
                  { <Route exact path="/Karta" component={Karta}/> }
                  { <Route exact path="/HopiNiver" component={HopiNiver}/> }
                  { <Route exact path="/App" component={App}/> }
                  { <Route exact path="/AtracoesInfantis" component={AtracoesInfantis}/> }
                  { <Route exact path="/Servicos" component={Servicos}/> }
                  { <Route exact path="/Duvidas" component={Duvidas}/> }
                  { <Route exact path="/Gastronomia" component={Gastronomia}/> }
                  { <Route exact path="/Login" component={Login}/> }

                  <App></App>
              </Switch>
      </Router>
  ),
  document.getElementById('root')
);


