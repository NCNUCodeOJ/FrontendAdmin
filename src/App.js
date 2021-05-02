import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Admin from './Admin';


const RouterSelector = () => {
  return (
    <Switch>
      <Route path="/admin/" component={Admin} />
      <Redirect from="/" to="/admin" />
    </Switch>
  )
}


class App extends Component {
  render() {
    return (
      <BrowserRouter forceRefresh={true} >
        <RouterSelector />
      </BrowserRouter>
    );
  }
}

export default App;
