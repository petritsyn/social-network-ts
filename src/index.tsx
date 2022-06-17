import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store'
import {StateType} from "./redux/store";

export let rerender = (state: StateType) => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}

rerender(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerender(state)
})