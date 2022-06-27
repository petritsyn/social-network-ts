import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {AppStateType} from './redux/redux-store'

export let rerender = (state: AppStateType) => {
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