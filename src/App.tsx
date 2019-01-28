import * as React from 'react';
import './App.scss';
import Home from './components/Home/Home';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import HowIWork from './components/HowIWork/HowIWork';
import Contact from './components/Contact/Contact';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/how-i-work" component={HowIWork} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/:slug" component={Home} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
