import React, { Component } from 'react'

export default class Secret extends Component {

  constructor() {
    super();
    this.state = {
      apiData: []
    }
  }

  componentDidMount() {
    fetch('/apiData')
      .then(res => res.json())
      .then(apiData => this.setState({ apiData }))
  }



  render() {
    return (
      <div>
        <p>Area 51, this is definitely a secret place!</p>

        <p>here below are the API Names from expressJS</p>
          {this.state.apiData.map(av => {
          return <li key={av.id} >{av.firstname} {av.surname}</li>})}

        <p>go back to <a href="/">home</a></p>
        <button onClick={this.props.auth.logout}>logout</button>
      </div>
    );
  }
}
