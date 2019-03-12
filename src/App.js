import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import Callback from './components/Callback';
import NotFound from './components/NotFound';



class App extends Component {
  render() {
    let mainComponent = "";
    switch (this.props.location) {
      case "":
        mainComponent = <Main {...this.props} />;
        break;
      case "callback":
        mainComponent = <Callback />;
        break;
      case "secret":
        mainComponent = this.props.auth.isAuthenticated() ? <Secret {...this.props} /> : <NotFound />;
        break;
      default:
        mainComponent = <NotFound />;
    }


    return (
      <div className="App">
        <MetaTags>
          <title>security</title>
          <meta name="description" content="Assignment web application security." />
          <meta httpEquiv="Content-Security-Policy" content="
                        default-src *;  
                        script-src; 'self' 
                        sandbox
                        img-src 'self';
                        style-src 'self' https://fonts.googleapis.com 'unsafe-inline';
                        font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com data:;
                        upgrade-insecure-requests; block-all-mixed-content;
                        connect-src 'self'
           "/>



        </MetaTags>
        <div>
          <h1 className="App-title">
            oh hi {this.props.name}
          </h1>
          <img style={{ width: '50px', height: '50px' }} src={this.props.picture || ""} alt="" />
          {mainComponent}
        </div>
      </div>
    );
  }
}

export default App;
