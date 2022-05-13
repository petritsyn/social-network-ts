import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import store from './state/state';

let state = store.getState();


function App() {
    return (
        <Router>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="contentWrapper">
                    <Switch>
                        <Route path="/profile" render={()=> <Profile posts={state.profilePage.posts}
                                                                     dispatch={store.dispatch.bind(store)}
                                                                     newPostText={state.profilePage.newPostText} />} />
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
