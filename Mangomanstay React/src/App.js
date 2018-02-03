import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var axios = require('axios');

//This the example code provided from genomelink.io for API in node js 
const request = require("request");

const token = "GENOMELINKTEST";
const options = { headers: { authorization: `Bearer ${token}` }, json: true };

const name = 'eye-color';
const population = 'european';
const reportUrl = `https://genomicexplorer.io/v1/reports/${name}/?population=${population}`;
request.get(reportUrl, options, function (error, response, body) { console.log(body.summary.text); });

const chrom = 'chr1';
const startPos = '100000';
const endPos = '100500';
const sequenceUrl = `https://genomicexplorer.io/v1/genomes/sequence/?region=${chrom}:${startPos}-${endPos}`
request.get(sequenceUrl, options, function (error, response, body) { console.log(body); });


//This is the working React code that when run displays basic text on the server it runs on which is locally at the moment

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MANGOMANSTAY</h1></header>
        
		<p className="App-intro" class="ceneter">
         Better Vacations are in your DNA</p>
      </div>
    );
  }
}
//This is my attempt at building an API call using axios and the example link
		
		axios.get('https://genomicexplorer.io/v1/reports/${name}/?population=${population}';
  .then(function(response) {
    console.log(response);
  })
  
  
  
  
export default App;
