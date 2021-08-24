import './App.css';
import SignIn from "./components/auth/SignIn";
import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import GamesList from "./components/GamesList";
import Game from "./components/Game";
import axios from "axios";
import { Redirect } from "react-router";
import { connect } from "react-redux";

axios.defaults.baseURL = 'http://localhost:3001';

function App(props) {
  const { user } = props;
  return (
    <div className="App">

      <div className="ui one column center aligned page grid">
        <div className="column twelve wide">
          <img src="/images/logo.svg" alt="logo"/>
        </div>
      </div>
      <div className="main container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {user?.username ? <GamesList/> :
                <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }}/>}
            </Route>
            <Route path="/game">
              {user?.username ? <Game/> :
                <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }}/>}
            </Route>
            <Route path="/sign-in" component={SignIn}/>
          </Switch>
        </BrowserRouter>
      </div>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
};
export default connect(mapStateToProps)(App);
