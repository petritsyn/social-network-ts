import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";

function App() {
    return (
        <Router>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <Switch>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/friends" component={Friends}/>
                    <Route path="/music" component={Music}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
