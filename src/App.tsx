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
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/Preloader/Preloader";

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

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
}

const MapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

type MapStatePropsType = ReturnType<typeof MapStateToProps>
type MapDispatchPropsType = {
    initializeApp: () => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

export default compose<React.ComponentType>(connect(MapStateToProps, {initializeApp}))(App);