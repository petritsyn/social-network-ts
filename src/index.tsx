import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'

export let rerender = () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}

rerender();