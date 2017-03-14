import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';

import Index from '../pages/Index';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Files from '../pages/Files';
import Room from '../pages/Room';

import RequireAuth from '../auth/RequireAuth';

const App = ({ children }) => (
  <div className="container">
    <Header />
    <Route exact path="/" component={Index} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
    <Route path="/files" component={Files} />
    <Route path="/room/:id" component={Room} />
  </div>
);

export default App;
