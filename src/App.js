import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/login"}>OnlineTech CP-501</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" hidden={authenticated}>
                  <Link className="nav-link" to={"/login"}>Login</Link>
                </li>
                <li className="nav-item" hidden={authenticated}>
                  <Link className="nav-link" to={"/register"}>Sign up</Link>
                </li>
                <li className="nav-item" hidden={!authenticated}>
                  <li className="nav-link" onClick={() => setAuthenticated(false)}>Logout</li>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path="/login">
                <Login setAuthenticated={setAuthenticated} />
              </Route>
              <Route path="/register" component={Register} />
              <Route path="/home">
                <Home authenticated={authenticated} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
