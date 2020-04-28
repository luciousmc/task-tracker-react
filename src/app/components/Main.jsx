import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConnectedDashboard } from './Dashboard';
import { Router, Route } from 'react-router-dom';
import { history } from '../store/history';
import { ConnectedNavigation } from './Naviation';

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation />
        {/* <ConnectedDashboard /> */}
        <Route
          exact
          path="/dashboard"
          render={()=><ConnectedDashboard />}
        />
      </div>
    </Provider>
  </Router>
)