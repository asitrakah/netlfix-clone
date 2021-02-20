import React, { useEffect } from 'react';
import logo from './logo.svg';

import './App.css';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/login/Login';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function App() {
  const user = localStorage.getItem('emailCo');

  useEffect(() => {
    const session = () => {

    }
    return session;
  }, [user])

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
