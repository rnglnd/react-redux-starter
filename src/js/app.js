import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { store } from './store';
import routes from './routes';

export default {
  renderApp: (config) => {
    render(
      <Provider store={store}>
        <Router>
          {routes(config)}
        </Router>
      </Provider>,
      window.document.getElementById('content'),
    );
  },
};

