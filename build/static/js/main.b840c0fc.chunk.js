(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(32)},20:function(e,t,a){},21:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(7),c=a.n(i),r=(a(20),a(1)),l=a(2),s=a(4),u=a(3),m=a(5),p=a(14),h=a.n(p),d=(a(21),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,"React page with Integrated Auth0!"),o.a.createElement("p",null,"hello there: ",this.props.general,", do you want to see the secret area ",o.a.createElement("a",{href:"/secret"},"klik dan hier.")),o.a.createElement("div",null),!this.props.auth.isAuthenticated()&&o.a.createElement("div",{className:"google-btn"},o.a.createElement("div",{className:"google-icon-wrapper"},o.a.createElement("img",{className:"google-icon-svg",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google"})),o.a.createElement("p",{className:"btn-text",onClick:this.props.auth.login},o.a.createElement("b",null,"Continue with Google"))),o.a.createElement("iframe",{id:"iframeinput",title:"online",src:"https://www.editpad.org/",sandbox:"allow-same-origin allow-scripts",width:"300",height:"200"}),o.a.createElement("iframe",{title:"maps",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.399885195848!2d4.413983615726766!3d51.230129879590564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f652fb581f19%3A0x4da1a65961921228!2sEllermanstraat+33%2C+2060+Antwerpen!5e0!3m2!1snl!2sbe!4v1552152724898",width:"300",height:"200",allowFullScreen:!0}))}}]),t}(n.Component)),g=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={apiData:[]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/apiData").then(function(e){return e.json()}).then(function(t){return e.setState({apiData:t})})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,"Area 51, this is definitely a secret place!"),o.a.createElement("p",null,"here below are the API Names from expressJS"),this.state.apiData.map(function(e){return o.a.createElement("li",{key:e.id},e.firstname," ",e.surname)}),o.a.createElement("p",null,"go back to ",o.a.createElement("a",{href:"/"},"home")),o.a.createElement("button",{onClick:this.props.auth.logout},"logout"))}}]),t}(n.Component),f=a(12),b=a(13),w=a.n(b);a(24).config();var k=function(){function e(){Object(r.a)(this,e),this.auth0=new f.a.WebAuth({domain:"vitamine.auth0.com",clientID:"jz7TTMzIxv7kGs15gS81cQuBnct2K4Qs",redirectUri:"https://react-auth0.netlify.com/callback",audience:"https://expressapi-av.herokuapp.com/apiData",responseType:"token id_token",scope:"openid profile read:expressapi-av",code_challenge_method:"",code_challenge:""}),this.login=this.login.bind(this)}return Object(l.a)(e,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){this.auth0.parseHash(function(e,t){if(t&&t.accessToken&&t.idToken){var a=JSON.stringify(1e3*t.expiresIn+(new Date).getTime());localStorage.setItem("access-token",t.accessToken),localStorage.setItem("id-token",t.idToken),localStorage.setItem("expiresAt",a),location.hash="",location.pathname="/secret"}else e&&(location.pathname="/",console.log(e))})}},{key:"isAuthenticated",value:function(){var e=JSON.parse(localStorage.getItem("expiresAt"));return(new Date).getTime()<e}},{key:"logout",value:function(){localStorage.removeItem("access-token"),localStorage.removeItem("id-token"),localStorage.removeItem("expiresAt"),location.pathname="/"}},{key:"getProfile",value:function(){return localStorage.getItem("id-token")?w()(localStorage.getItem("id-token")):{}}}]),e}(),v=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){(new k).handleAuthentication()}},{key:"render",value:function(){return o.a.createElement("div",null,"Loading...")}}]),t}(n.Component),E=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"WOW Mate, what are u doing? Page is not found",o.a.createElement("p",null,"click ",o.a.createElement("a",{href:"/"},"here")," to go back from where you came mathafacka "))}}]),t}(n.Component),y=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="";switch(this.props.location){case"":e=o.a.createElement(d,this.props);break;case"callback":e=o.a.createElement(v,null);break;case"secret":e=this.props.auth.isAuthenticated()?o.a.createElement(g,this.props):o.a.createElement(E,null);break;default:e=o.a.createElement(E,null)}return o.a.createElement("div",{className:"App"},o.a.createElement(h.a,null,o.a.createElement("title",null,"security"),o.a.createElement("meta",{name:"description",content:"Assignment web application security."}),o.a.createElement("meta",{httpEquiv:"Content-Security-Policy",content:" default-src *;   script-src; 'self'  sandbox img-src 'self'; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com data:; upgrade-insecure-requests; block-all-mixed-content; connect-src 'self' "})),o.a.createElement("div",null,o.a.createElement("h1",{className:"App-title"},"oh hi ",this.props.name),o.a.createElement("img",{style:{width:"50px",height:"50px"},src:this.props.picture||"",alt:""}),e))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O={},j=new k;window.setState=function(e){O=Object.assign({},O,e),c.a.render(o.a.createElement(y,O),document.getElementById("root"))};var x={name:j.getProfile().given_name,picture:j.getProfile().picture,general:"General kenoby",location:location.pathname.replace(/^\/?|\/$/g,""),auth:j};window.setState(x),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.b840c0fc.chunk.js.map