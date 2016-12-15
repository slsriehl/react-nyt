const React   = require('react'),
      axios   = require('axios'),  
      helpers = require('./utils/helpers'), 
      Search  = require('./kids/search'), 
      Results = require('./kids/results'),
      History = require('./kids/history');


let Main = React.createClass({
  getInitialState: function() {
    return {
      articlesNyt: [],
      articlesMongo:[]
    };
  }, 
  _nytGet: function(q, begin_date, end_date) {
    console.log(this.state.articlesNyt);
    helpers._nytGet(q, begin_date, end_date)
    .then(function cbres(result) {
      let nytRes = result.data.response.docs;
      console.log(nytRes);
        for(let i in nytRes) {
          this.setState({articlesNyt: 
            this.state.articlesNyt.concat({
              web_url:  nytRes[i].web_url,
              abstract: nytRes[i].abstract,
              headline: nytRes[i].headline.main,
              byline:   nytRes[i].byline.original,
              pub_date: nytRes[i].pub_date
            })
          });
        }
      }.bind(this)).then(function cblog() {
            console.log(this.state.articlesNyt)
          }.bind(this));
  },

  _mongoPost: function() {
    return axios.post('/api/saved')
    .then();
  },

  _mongoGet: function() {
    return axios.get('/api/saved')
    .then();
  },

  _mongoDelete: function() {
    return axios.delete('/api/saved')
    .then();
  },

  render: function() {
    return (
  <div>
    <div className="container">
      <div className="row">
        <div className="col col-sm-12">
          New York Times Article Search
        </div>{/* end col-sm-12 */}
      </div>{/* end row */}
    </div>{/* end inner container */}

    <Search  
      _nytGet={this._nytGet} 
    />
    {/*<Results 
      articlesNyt={this.state.articlesNyt}
      articlesMongo={this.state.articlesMongo}
      _mongoPost={this._mongoPost}
      _mongoDelete={this._mongoDelete}
    />
    <History 
      articlesMongo={this.state.articlesMongo}
      _mongoDelete={this._mongoDelete}
      _mongoGet={this._mongoGet}
    />*/}
  {/* end overall container */}      
  </div>
    );
  }
});

module.exports  = Main;