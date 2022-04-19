import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsDataType = {
    id: number
    name: string
}

export type MessageDataType = {
    id: number
    message: string
}

let posts: Array<PostDataType> = [
    {id: 1, message: 'First post', likesCount: 5},
    {id: 2, message: 'Second post', likesCount: 7}
];

let dialogs: Array<DialogsDataType> = [
    {id: 1, name: 'Andrew'},
    {id: 2, name: 'Anna'},
    {id: 2, name: 'Alina'},
    {id: 2, name: 'Alexander'},
];

let messages: Array<MessageDataType> = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 2, message: 'Hey'}
];

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById('root')
);