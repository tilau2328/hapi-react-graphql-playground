import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Index from '../../pages/Index';
import SignUp from '../../pages/SignUp';
import SignIn from '../../pages/SignIn';
import Files from '../../pages/Files';
import Room from '../../pages/Room';

import RequireAuth from '../auth/RequireAuth';

const AppRouter = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="signup" component={SignUp} />
        <Route path="signin" component={SignIn} />
        <Route path="files" component={Files} />
        <Route path="room/:id" component={Room} />
      </Route>
    </Router>
  );
}

export default AppRouter;
