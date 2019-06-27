import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import LoginForm from './components/LoginForm'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import UserAccount from './components/UserAccount'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={LandingPage} exact/>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/useraccount" component={UserAccount} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
