import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import LoginForm from './components/LoginForm'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Store from './components/store/Store'
import StoryCard from './components/stories/StoryCard'
import ChoiceOne from './components/stories/ChoiceOne'
import ChoiceTwo from './components/stories/ChoiceTwo'
import ChoiceThree from './components/stories/ChoiceThree'
import About from './components/Portfolio/About'

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
          <Route path="/fullstory" component={StoryCard} />
          <Route path="/choiceone" component={ChoiceOne} />
          <Route path="/choicetwo" component={ChoiceTwo} />
          <Route path="/choicethree" component={ChoiceThree} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
