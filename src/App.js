import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/login/Login';

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
            <Switch>
              <Route path="/test">

              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          )}
      </Router>
    </div>
  );
}

export default App;
