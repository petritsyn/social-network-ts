import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import {StoreType} from './redux/store';

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    return (
        <Router>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="contentWrapper">
                    <Switch>
                        <Route path="/profile" render={() => <Profile
                            posts={props.store.getState().profilePage.posts}
                            dispatch={props.store.dispatch.bind(props.store.dispatch)}
                            newPostText={props.store.getState().profilePage.newPostText}
                        />}/>
                        <Route path="/dialogs" render={() => <Dialogs
                            dialogs={props.store.getState().dialogsPage.dialogs}
                            messages={props.store.getState().dialogsPage.messages}
                            newMessageText={props.store.getState().dialogsPage.newMessageText}
                            dispatch={props.store.dispatch}
                        />}/>
                        <Route path="/friends" component={Friends}/>
                        <Route path="/music" component={Music}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
