const React = require('react');

let Results = React.createClass({
	getInitialState: function() {
		return {
			postArticle: {}
		};
	}, 
	
	_showNyt: function(articles) {
		let mapArts = articles.map((itemObj, index) => {
			return( 
       <div className="col col-sm-3 col-result-body" key={index}>
        	<h4><a href={itemObj.web_url} target="_blank">{index + 1} {itemObj.headline}</a></h4>
          <p>{itemObj.pub_date}</p>
          <p>{itemObj.byline}</p>
          <p>... {itemObj.snippet}...</p>
          <button 
          	type="button" 
          	className="btn btn-large btn-save btn-this" 
          	onClick={() => {
          		this.props._mongoPost(itemObj)
          	}}>Save Article</button><br />
        </div>
      );
    });
    return mapArts;
 	},

	render: function() {
		return (
			<div className="container">
				<div className="row row-result-title">
					<div className="col col-sm-12 col-result-title">
						<h2 className="text-right"><i className="fa fa-search-plus"></i>   your search returned {this.props.articlesNyt.length} articles</h2>
					</div>{/* end col-sm-12 */}
				</div>{/* end row */}
				<div class="grid row" data-masonry='{ "itemSelector": ".col-result-body" }'>

						{this._showNyt(this.props.articlesNyt)}

				</div>{/* end row */}
			{/* end container */}
			</div>
		);
	}

});





module.exports = Results;