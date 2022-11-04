import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LoginPage } from './pages/Login/LoginPage';
import { RegisterPage } from './pages/Register/RegisterPage';
import Main from './pages/Main/index';

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
        <Route path="/main">
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
}
