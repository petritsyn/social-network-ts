import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App-wrapper">

            <div className='header'>
                <img src='https://image.shutterstock.com/image-vector/mr-logo-600w-330715661.jpg'/>
            </div>

            <div className='nav'>
                <a>Profile</a>
                <a>Messages</a>
                <a>Friends</a>
                <a>Music</a>
            </div>

            <div className='content'>
                <div>
                    <img src='https://wikitravel.org/upload/shared/thumb/a/a9/Bahamas_banner.jpg/1200px-Bahamas_banner.jpg'/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    Posts
                </div>
            </div>

        </div>
    );
}

export default App;
