import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
//import axios from 'axios';

//This the example code provided  from genomelink.io for API in node js 
//const request = require("request");

// const apikey = 'GENOMELINKTEST';
//const options = { headers: { authorization: `Bearer ${token}` }, json: true };

//const name = 'eye-color';
//const population = 'european';
//const reportUrl = `https://genomicexplorer.io/v1/reports/${name}/?population=${population}`;
//request.get(reportUrl, options, function (error, response, body) { console.log(body.summary.text); });

//const chrom = 'chr1';
//const startPos = '100000';
//const endPos = '100500';
//const sequenceUrl = `https://genomicexplorer.io/v1/genomes/sequence/?region=${chrom}:${startPos}-${endPos}`
//request.get(sequenceUrl, options, function (error, response, body) { console.log(body); });


//This is the working React code that when run displays basic text on the server it runs on which is locally at the moment
React.render(<App/>, document.getElementById('root'));
class App extends Component {
  render() {
    return (
      <div className="website">
        <header className="Website Header">  
        <h1 className="website-title">MANGOMANSTAY</h1></header>
		
      
      </div>
    );
  }
}
export default App;
//This is my attempt at building an API call using axios and the example link
		
/*a mmmmmmmmmxios.get('https://genomicexplorer.io/v1/reports/${name}/?population=${population}')
  .then(function(response) {
			var gs = response.data.data;
			var url = gs
    console.log(URL);
})*/
  

