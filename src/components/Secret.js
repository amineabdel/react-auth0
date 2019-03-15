import React, { Component } from 'react'

export default class Secret extends Component {

  constructor() {
    super();
    {/*we halen de state van index.js op en voegen iets erbij.*/}
    this.state = {
      apiData: []
    }
  }

  /*Nadat de hele render pagina wordt geladen, zal de methode fetch() de API dan ook geladen worden. Dankzij de componentDidMount()*/ 
  componentDidMount() {
    console.log("cdm");
    fetch(
      /*student code change start*/ 
       /*We hebben urenlang achter gezocht, waarom onze api data niet werd getoond in de browser. */ 
       /* We kregen een error in console van de browser en we hebben dan de hele internet achter gezocht, waarom het niet werkte*/ 
       /* We hebben de fout gemaakt om alleen de pad (/apiData) toe te voegen in fetch ipv de volledige URL.*/ 
      'https://expressapi-av.herokuapp.com/apiData'
      /*student code change start*/ ).then(
        /*fetch methode van het internet gehaald en alleen mijn eigen apiData toegevoegd */
        res => res.json()).then(apiData => this.setState({ apiData }));
  }


  render() {
    return (
      <div>
        
        <p>Area 51, this is definitely a secret place!</p>
        <p>there might be Aliens!</p>

        <p>here below are the API Names from expressJS</p>

        {/*we willen de data tonen in onze webbrowser dan moet dan met key gemapt worden */ }
        {/*wordt dankzij de key automatisch gelooped */ }
        {/*map komt van de javascript Array*/ }
          {this.state.apiData.map(av => {
          return <li key={av.id} >{av.firstname} {av.surname}</li>
        })}

        <p>go back to <a href="/">home</a></p>
        <button onClick={this.props.auth.logout}>logout</button>
      </div>
    );
  }
}
