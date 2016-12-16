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
       <div key={index}>
        	<h3><a href={itemObj.web_url} target="_blank">{index + 1} {itemObj.headline}</a></h3>
          <p>{itemObj.pub_date}</p>
          <p>{itemObj.byline}</p>
          <p>... {itemObj.snippet}...</p>
          <button type="button" className="btn btn-large" onClick={() => {this.props._mongoPost(itemObj)}}>Save Article</button><br />
        </div>
      );
    });
    return mapArts;
 	},

	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col col-sm-12">
						<h2>Your search returned {this.props.articlesNyt.length} articles</h2>
					</div>{/* end col-sm-12 */}
				</div>{/* end row */}
				<div className="row">
					<div className="col col-sm-12">

						{this._showNyt(this.props.articlesNyt)}

					</div>{/* end col-sm-12 */}
				</div>{/* end row */}
			{/* end container */}
			</div>
		);
	}

});





module.exports = Results;