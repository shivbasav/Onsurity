import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error'
import Navigation from './Components/Navigation'
import Claims from './Components/Claims'
import Login from './Components/Login';
import Elements from './Components/Elements';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/claims" component={Claims} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
        </div>
        <Elements />
      </BrowserRouter>
    );
  }
}

export default App;
