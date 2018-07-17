import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import Auth from './Auth';
import Login from './Login';
import Register from './Register';
import HackathonDashboard from './HackathonDashboard';
import HackathonDetails from './HackathonDetails';
export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" render={props => <Login {...props} />} />
      <Route exact path="/register" render={props => <Register {...props} />} />
      <Route exact path="/auth" render={props => <Auth {...props} />} />
      <Route exact path="/hackathonList" render={props => <HackathonDashboard {...props} />} />
      <Route path="/hack/:id" component={HackathonDetails}/>
    </Switch>
  </BrowserRouter>
);
