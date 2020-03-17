import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import a from './App.css';
import CssModules from 'react-css-modules';

import Basic from './Pages/Basic';
import Components from './Pages/Components';
import Classes from './Pages/Classes';
import MergeClasses from './Pages/MergeClasses';
import Intro from './Pages/intro';


class App extends Component {

  constructor(props) {
    super(props);

  this.state = {
      todos: []
    };
  }

  render() {
    //console.log(this.state);
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Intro</Link>
            </li>
            <li>
              <Link to="/basic">Basic Usage</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <Link to="/components">Components (.root)</Link>
            </li>
            <li>
              <Link to="/mergeclasses">Merge Classes</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/components">
            <Components />
          </Route>
          <Route path="/classes">
            <Classes />
          </Route>
          <Route path="/mergeclasses">
            <MergeClasses />
          </Route>
          <Route path="/basic">
            <Basic />
          </Route>
          <Route path="/">
            <Intro />
          </Route>
        </Switch>
    </Router>
    );
  }
}

export default CssModules(App, a);
