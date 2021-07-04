import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import ContinentsView from './views/ContinentsView';
import SingleContinent from './components/singleContinentCountries/SingleContinentCountries';
import ContinentsLink from './components/continents/ContinentsLink';

import client from './common/apollo-client';

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/" component={ContinentsLink} />
        <Route exact path="/continents" component={ContinentsView} />
        <Route path="/continents/:code" component={SingleContinent} />
      </Router>
    </ApolloProvider>
  );
};

export default App;
