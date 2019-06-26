import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import LoginForm from './components/LoginForm'
import Register from './components/Register'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={LandingPage} exact/>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
