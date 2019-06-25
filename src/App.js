import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={LandingPage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
