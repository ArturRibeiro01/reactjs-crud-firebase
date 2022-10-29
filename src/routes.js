import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LoginPage } from './pages/Login/LoginPage';
import { RegisterPage } from './pages/Register/RegisterPage';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
}
