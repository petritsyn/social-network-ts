import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

function App() {
    return (
        <Router>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="contentWrapper">
                    <Switch>
                        <Route path="/profile" render={() => <Profile/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/friends" component={Friends}/>
                        <Route path="/music" component={Music}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
