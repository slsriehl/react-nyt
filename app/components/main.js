const React   = require('react'),
      axios   = require('axios'), 
      helpers = require('./utils/helpers'), 
      Search  = require('./kids/search'), 
      Results = require('./kids/results'),
      History = require('./kids/history');


let Main = React.createClass({
  getInitialState: function() {
    return {
      articles_nyt: [],
      articles_mongo:[],
    };
  }, 
  _nytGet: function(q, begin_date, end_date) {
    helpers._nytGet(q, begin_date, end_date)
    .then((result) => {
        if(result.docs) {
          for(let i in result.docs) {
            this.setState({articles_nyt: [{
              web_url:  result.docs[i].web_url,
              abstract: result.docs[i].abstract,
              headline: result.docs[i].headline.main,
              byline:   result.docs[i].byline.original,
              pub_date: result.docs[i].pub_date
              }]
            });
          }
          console.log(this.state.articles_nyt);
        } else {
          console.log("no data returned");
          return "no data returned";
        }

      });
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
      articles_nyt={this.state.articles_nyt} 
      _nytGet={this._nytGet} 
    />
    {/*<Results 
      articles_nyt={this.state.articles_nyt}
      articles_mongo={this.state.articles_mongo}
      _mongoPost={this._mongoPost}
      _mongoDelete={this._mongoDelete}
    />
    <History 
      articles_mongo={this.state.articles_mongo}
      _mongoDelete={this._mongoDelete}
      _mongoGet={this._mongoGet}
    />*/}
  {/* end overall container */}      
  </div>
    );
  }
});

module.exports  = Main;