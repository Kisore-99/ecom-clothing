import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import './App.css';

const HatsPage= () =>(
  <div>
    <h1>HATS PAGE</h1>
  </div>

);
// Route needs three things
//component repreents which component to be navigated
//path is the absolute path of that file
//exact-> can be true or false, if nothing mentioned it is true
function App() {
  return (
    <div > 
      <Switch>
        <Route exact path='/' component={HomePage} /> 
        <Route  path='/hats' component={HatsPage} /> 
      </Switch>
    </div>
  );
}

export default App;
