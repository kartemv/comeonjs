import './App.css';
import SignIn from "./components/auth/SignIn";
import React from "react";
import logo from './images/logo.svg'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import GamesList from "./components/GamesList";
import Game from "./components/Game";

function App() {
    return (
        <div className="App">

            <div className="ui one column center aligned page grid">
                <div className="column twelve wide">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
            <div className="main container">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={GamesList}/>
                        <Route path="/game" component={Game}/>
                        <Route path="/sign-in" component={SignIn}/>
                    </Switch>
                </BrowserRouter>
            </div>

        </div>
    );
}

export default App;
