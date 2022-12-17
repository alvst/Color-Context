import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { ColorProvider } from './Contexts/ColorContext';

import Home from './Home';
import Color from './Color';
import Other from './Other';

export default function Routes() {
  return (
    <Router>
      <ColorProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/color' component={Color} />
          <Route path='/other' component={Other} />

          <Redirect to='/' />
        </Switch>
      </ColorProvider>
    </Router>
  );
}
