/*eslint no-restricted-globals: 0 */
import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';
/*import dotenv from 'dotenv'
dotenv.config();*/
require('dotenv').config()

//const dotenv = require('dotenv').config();

const LOGIN_SUCCESS_PAGE = "/secret";
const LOGIN_FAILURE_PAGE = "/";



export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'vitamine.auth0.com',
        clientID: process.env.REACT_APP_CLIENT_ID,
        redirectUri: 'https://react-auth0.netlify.com/callback',
        audience: 'https://expressapi-av.herokuapp.com/apiData',
        responseType: 'token id_token',
        /*Als je inlogt, vraagt auth0 toestemming voor je profiel en voor de API Data (zie scope).
        Werkt maar één keer, tijdens het opnieuw loggen heb je al toestemming gegeven, Dus wordt dat scherm niet meer getoond.*/
        scope: 'openid profile expressapi.read',
    });
    constructor() {
        this.login = this.login.bind(this);
    }
    login() {
        this.auth0.authorize();
    }
    handleAuthentication() {
        this.auth0.parseHash((err, authResults) => {
            if (authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
                localStorage.setItem("access-token", authResults.accessToken);
                localStorage.setItem("id-token", authResults.idToken);
                localStorage.setItem("expiresAt", expiresAt);
                location.hash = "";
                location.pathname = LOGIN_SUCCESS_PAGE;
            } else if (err) {
                location.pathname = LOGIN_FAILURE_PAGE;
                console.log(err);
            }
        })
    }

    isAuthenticated() {
        let expiresAt = JSON.parse(localStorage.getItem("expiresAt"));
        return new Date().getTime() < expiresAt;
    }

    logout() {
        localStorage.removeItem("access-token");
        localStorage.removeItem("id-token");
        localStorage.removeItem("expiresAt");
        location.pathname = LOGIN_FAILURE_PAGE;
    }

    getProfile() {
        if (localStorage.getItem("id-token")) {
            return jwtDecode(localStorage.getItem("id-token"));
        } else {
            return {};
        }
    }








}
