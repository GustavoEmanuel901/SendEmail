import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Register from './pages/Register';
import SendEmail from './pages/SendEmail';

const Routes: React.FC = () => {
  return (
      <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/email/create' component={SendEmail}/>
            <Route path='/email/:id' component={Detail}/>
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;