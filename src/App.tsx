import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContinentsView from './views/ContinentsView';
import SingleContinent from './components/singleContinentCountries/SingleContinentCountries';
import ContinentsLink from './components/continents/ContinentsLink';

const App: FC = () => {
  return (
    <Router>
      <Route exact path="/" component={ContinentsLink} />
      <Route exact path="/continents" component={ContinentsView} />
      <Route path="/continents/:name" component={SingleContinent} />
    </Router>
  );
};

export default App;
