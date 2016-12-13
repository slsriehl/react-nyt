const React   = require('react'), 
      Search  = require('./kids/search'), 
      Results = require('./kids/results'),
      History = require('./kids/history');


let Main = React.createClass({
  getInitialState: function() {
    return {
      articles_nyt: [],
      articles_mongo:[],
      q: "", 
      begin_date: "18700101",
      end_date: "20161213", 
      key: "77477d08cc0a4b84b344710a4dccb09d",  
      sort: "newest",
      hl: true,
      fl: "web_url,abstract,headline,byline,pub_date"
    };
  }, 

  getQ: function(prevProps, prevState) {
    let q = ;
    let begin_date = ;
    let end_date = ;
    this.setState({q, begin_date, end_date});
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
    return $.getJSON(`https://api.nytimes.com/svc/search/v2/articlesearch.json?${data}`)
      .then((result) => {
        for(let i in result.docs) {
          this.setState({articles_nyt: [{
            web_url: result.docs[i].web_url,
            abstract: result.docs[i].abstract,
            headline: result.docs[i].headline.main,
            byline: result.docs[i].byline.original,
            pub_date: result.docs[i].pub_date
          }]
        }
      });
    });
  }, 

  Reset: function() {
  {/* reset inputs */}
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

    <Search articles={this.state.articles} />
    <Results />
    <History />
        
  </div>{/* end overall container */}
    );
  }
});