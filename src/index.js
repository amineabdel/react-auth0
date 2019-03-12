import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from './Auth';

let state = {};
const auth = new Auth();

window.setState = (changes) => {
    state = Object.assign({},state, changes);
    ReactDOM.render(<App {...state} />, document.getElementById('root'));
};
/*eslint no-restricted-globals: 0 */
let username = auth.getProfile().given_name;
let picture = auth.getProfile().picture;


let initialState = {
    name: username,
    picture: picture,
    general: "General kenoby",
    location: location.pathname.replace(/^\/?|\/$/g,""),
    auth
};

window.setState(initialState);

serviceWorker.unregister();
