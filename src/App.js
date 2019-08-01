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
import ChoiceBrad from './components/Portfolio/ChoiceBrad'
import ChoiceWill from './components/Portfolio/ChoiceWill'
import ChoiceGrant from './components/Portfolio/ChoiceGrant'

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
          <Route path="/bradpitt" component={ChoiceBrad} />
          <Route path="/willsmith" component={ChoiceWill} />
          <Route path="/grantfox" component={ChoiceGrant} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
