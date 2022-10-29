import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LoginPage } from './pages/Login/LoginPage';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}
