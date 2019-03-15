import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from './Auth';

let state = {};
const auth = new Auth();

window.setState = (changes) => {
    //updating an object, by copying the state into the new changes.
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
    //ipv react Router te gebruiken, hebben we simpel voor dit project location gebruikt.
    //de pad van de URL wordt gereplaced (zie App.js)
    location: location.pathname.replace(/^\/?|\/$/g,""),
    auth
};

window.setState(initialState);

serviceWorker.unregister();
