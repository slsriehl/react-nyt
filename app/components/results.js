const React = require('react'),

let Results = React.createClass({
  getInitialState: function() {
    return {
    };
  }, 

  componentDidMount: function(prevProps, prevState) {
    this.props.ArticleSearch();
  },

  getQ: function(prevProps, prevState) {
    let query = ;
    let begin_date = ;
    let end_date = ;
    this.setState({q: query, begin_date: begin_date, end_date: end_date});
  }, 

//setState q from input

  ArticleSearch: function() {
    let data = {
      key:         this.state.key, 
      q:           this.state.q, 
      sort:        this.state.sort, 
      hl:          this.state.hl, 
      fl:          this.state.fl, 
      begin_date:  this.state.begin_date, 
      end_date:    this.state.end_date
    }
    return $.getJSON('https://randomuser.me/api/')
      .then((data) => {
        this.setState({articles: data.results});
      });
  }, 

  Reset: function() {
  {/* reset inputs */}
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
          <label for="query">Search for<input type="text" id="query" /></label>
          <label for="begin-date">Earliest Date (optional)<input type="text" id="begin-date" /></label>
          <label for="end-date">Latest Date (optional)<input type="text" id="end-date" /></label>

          <button type="button" className="btn btn-large" onClick={this.props.ArticleSearch}>Search Articles</button><br />
          <button type="button" className="btn btn-large" onClick={this.Reset}>Clear Form</button><br />
        </div>{/* end col-sm-12 */}
      </div>{/* end row */}
    </div>{/* end container */}
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