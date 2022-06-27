import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {AppStateType} from "./redux/redux-store";

type AppPropsType = {
    store: AppStateType
}

function App(props: any) {
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
                        <Route path="/dialogs" render={() => <DialogsContainer
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
