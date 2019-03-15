import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import Callback from './components/Callback';
import NotFound from './components/NotFound';



class App extends Component {
  render() {
     {/*student code change start*/} 
    let mainComponent = "";
    switch (this.props.location) {
      case "":
      {/*in de mainklasse (Main.js) willen we alle properties dynamisch gebruiken.
      Daarom hebben we het geïnitialiseerd in de index.js.*/} 
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
      {/*student code change end*/}
    }


    return (
      <div className="App">
       {/*student code change start 
        in de metatags wordt er een extra beveiligingslaag toegevoegd namelijk de CSP policy 
        Het helpt om XSS te detecteren en aanvallen te beperken 
         je kan zien dat er gewoon onze eigen script wordt toegelaten en niet van iemand die dat wilt hacken */} 
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
        {/*student code change end*/}
        <div>
          <h1 className="App-title">
          {/*student code change start*/} 
          oh hi {this.props.name}  
          </h1>
          {/*picture komt van Auth.js (auth0) en werd in de props gezet in index.js.
          In de img src kan je ook zien als iemand geen foto heeft in zijn google account, dat we dat met || gewoon leeg laten.*/} 
          <img style={{ width: '50px', height: '50px' }} src={this.props.picture || ""} alt="authFoto" />
          {/*onze simpele router van boven zetten we hieronder om resultaten zichtbaar te maken.*/}
          {mainComponent}
          {/*student code change end*/}
        </div>
      </div>
    );
  }
}

export default App;
