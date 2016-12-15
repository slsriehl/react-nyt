const React = require('react');


let Search = React.createClass({
  getInitialState: function() {
    return {
    	q: "",
    	begin_date: "",
    	end_date: ""
    };
  }, 

//setState q from input

  
  _reset: function() {
  {/* reset inputs */}
  }, 
  _handleChangeQ: function(event) {
  	this.setState({
  		q: event.target.value,
  	});
  },
  _handleChangeB_D: function(event) {
  	this.setState({
  		begin_date: event.target.value
  	});
  },
	_handleChangeE_D: function(event) {
  	this.setState({
  		end_date: event.target.value
  	});
  },


  _handleSubmit: function() {
  	this.props._nytGet(this.state.q, this.state.begin_date, this.state.end_date);
  	this.setState({
  		q: "",
  		begin_date: "",
  		end_date: ""
  	});
  },

  render: function() {
    return (		

		<div className="container">
      <div className="row">
        <div className="col col-sm-12">
              Search Results
        </div>{/* end col-sm-12 */}
      </div>{/* end row */}
      <div className="row">
        <div className="col col-sm-12">
          <label htmlFor="query">Search for
          <input 
          	value={this.state.q}
          	type="text" 
          	id="query" 
          	onChange={this._handleChangeQ}
          /></label>
          <label htmlFor="begin-date">Earliest Date (optional)
          <input 
          	value={this.state.begin_date}
          	type="text" 
          	id="begin-date" 
          	onChange={this._handleChangeB_D}
          /></label>
          <label htmlFor="end-date">Latest Date (optional)
          <input 
          	value={this.state.end_date}
          	type="text" 
          	id="end-date" 
          	onChange={this._handleChangeE_D}
          /></label>

          <button type="button" className="btn btn-large" onClick={this.props._nytGet}>Search Articles</button><br />
          <button type="button" className="btn btn-large" onClick={this._reset}>Clear Form</button><br />
        </div>{/* end col-sm-12 */}
      </div>{/* end row */}
      {/* end container */}
    </div>
    );
  }
});



{/* const viewArticles = this.state.articles.map((item, i) => {
      return <div>
        <h1>{item.name.first}</h1>
        <span>{item.cell}, {item.email}</span>
      </div>
    });

    return <div id="layout-content" className="layout-content-wrapper">
      <div className="panel-list">{viewArticles}</div>
    </div>
    */}

module.exports 	= Search;