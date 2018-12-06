import React from 'react';
import { Route, Switch } from 'react-router';
import HelloWorld from './components/HelloWorld';
import NoMatch from './components/NoMatch';

const routes = config => (
  <Switch>
    <Route
      component={() => <HelloWorld {...config} />}
      exact
      path="/"
    />
    <Route
      component={NoMatch}
    />
  </Switch>
);

export default routes;
