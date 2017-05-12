import React, { Component } from 'react';
//import './App.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        	<div className="col-lg-12">
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title">Search Parameters</h3>
					</div>
					<div className="panel-body">
	
						<form>
							<div className="form-group">
							<label for="topic">Topic:</label>
								<input type="text" className="form-control" id="topic" />
							</div>
							<div className="form-group">
								<label for="start_year">Start Year:</label>
								<input type="text" className="form-control" id="start_year" />
							</div>
							<div className="form-group">
								<label for="end_year">End Year:</label>
								<input type="text" className="form-control" id="end_year" />
							</div>
							
							<button type="submit" className="btn btn-default">Search</button>
						</form>
					</div>
				</div>
			</div>

			<div className="col-lg-12">
				<div className="panel panel-success">
					<div className="panel-heading">
						<h3 className="panel-title">Top Articles</h3>
					</div>
					<div className="panel-body">
						Panel content
					</div>
				</div>
			</div>
      </div>
    );
  }
}

export default Search;