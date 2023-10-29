import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/analytics" component={Analytics} />
      </Switch>
    </Router>
  );
};

export default Routes;