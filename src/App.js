import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import LoginForm from './components/LoginForm'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Store from './components/store/Store'

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
          <Route path="/store" component={Store} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
