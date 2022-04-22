import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import state from './state/state';
import {addPost} from "./state/state";


function App() {
    return (
        <Router>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="contentWrapper">
                    <Switch>
                        <Route path="/profile" render={()=> <Profile posts={state.profilePage.posts} addPost={addPost} />}/>
                        <Route path="/dialogs" render={() => <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} />}/>
                        <Route path="/friends" component={Friends}/>
                        <Route path="/music" component={Music}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
