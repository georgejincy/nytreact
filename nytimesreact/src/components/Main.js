import React, { Component } from 'react';
//import './App.css';
import Search from './Search';
import Saved from './Saved'

class Main extends Component {
  render() {
    return (
      <div className="App">

      	<div className="container">
			<div className="jumbotron text-center">
				<h2><strong>New York Times Scrubber</strong></h2>
				<p><em>Search for and annotate articles of interest</em></p>
				<hr ></hr>
			
			</div>
			<div class = "row">
			 Main
        	<Search />
        	<Saved />
        	</div>

		</div>

       
      </div>
    );
  }
}

export default Main;