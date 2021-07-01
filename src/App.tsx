import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Continents from './views/Continents';
import SingleContinent from './views/SingleContinent';

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/continentSingle">
          <SingleContinent />
        </Route>
        <Route path="/">
          <Continents />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
