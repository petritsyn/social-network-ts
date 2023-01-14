import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Login} from "./components/Login/Login";

function App() {
    return (
        <Router>
            <div className="App-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="contentWrapper">
                    <Switch>
                        <Route path="/profile/:userId?" component={ProfileContainer}/>
                        <Route path="/dialogs" component={DialogsContainer}/>
                        <Route path="/users" component={UsersContainer}/>
                        <Route path="/friends" component={Friends}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/login" component={Login}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
