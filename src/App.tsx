import React from 'react';
import './App.css';
import List from './components/List';
import MoreInfo from './components/MoreInfo';
// https://reactrouter.com/web/example/basic
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App:React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/hot-sauces">
          <List />
        </Route>
        <Route path="/more-info">
          <MoreInfo />
        </Route>
        <Route exact path="*">
          <Redirect to="/hot-sauces"/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
