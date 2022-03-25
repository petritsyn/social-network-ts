import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            {/*<Content/>*/}
            <Dialogs/>
        </div>
    );
}

export default App;
