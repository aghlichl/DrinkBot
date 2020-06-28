import React from 'react';
import { Counter } from './features/counter/Counter';
import { Category } from './features/category/Category';
import { Ingredient } from './features/ingredient/Ingredient';
import { Drinks } from './features/drinks/Drinks';

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/ingredients">
          <Ingredient></Ingredient>
        </Route>
        <Route exact path="/drinks/:id">
          <Drinks></Drinks>
        </Route>
        <Route exact path="/">
          <Ingredient></Ingredient>
        </Route>     
      </Switch>
      </Router>
  );
}

export default App;
