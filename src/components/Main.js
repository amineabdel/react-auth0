import React, { Component } from "react";



const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.399885195848!2d4.413983615726766!3d51.230129879590564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f652fb581f19%3A0x4da1a65961921228!2sEllermanstraat+33%2C+2060+Antwerpen!5e0!3m2!1snl!2sbe!4v1552152724898";
const googleLogo = "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg";


export default class Main extends Component {
    render() {

        return (
            <div>
                <p>
                    React page with Integrated Auth0!
                    </p>
                    
                {/* star wars referentie :D */ }
                <p>hello there: {this.props.general}, do you want to see the secret area <a href="/secret">klik dan hier.</a></p>
                <div>

                </div>

                {/* Als je ingelogd bent, hoef je niet meer de 'continue with google' button zien*/ }
                {!this.props.auth.isAuthenticated() &&

                    <div className="google-btn"  >
                        <div className="google-icon-wrapper">
                            <img className="google-icon-svg" src={googleLogo} alt="google" />
                        </div>
                        <p className="btn-text" onClick={this.props.auth.login}><b>Continue with Google</b></p>
                    </div>
                }

                
                {/* enable using allow-same-origin en enable using allow-scripts mogen nooit allebei gebruikt worden */ }
                <iframe id="iframeinput" title="online" src='https://www.editpad.org/'
                    sandbox="allow-same-origin"
                    width="300" height="200">
                </iframe>

                <iframe title="maps" sandbox="allow-scripts allow-popups allow-forms"
                    src={url}
                    width="300" height="200" allowFullScreen>
                </iframe>



            </div >


        )
    }
}