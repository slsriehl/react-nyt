const React = require('react');

let History = React.createClass({

	componentWillMount: function() {
		this.props._mongoGet();
	},

	_showMongo: function() {
		let mapArts = this.props.articlesMongo.map((itemObj, index) => {
			return( 
       <div className="col col-sm-3 col-result-body" key={index} data-id={itemObj._id}>
        	<h4><a href={itemObj.web_url} target="_blank">{index + 1} {itemObj.headline}</a></h4>
          <p>{itemObj.pub_date}</p>
          <p>{itemObj.byline}</p>
          <p>... {itemObj.snippet}...</p>
          <button 
          	type="button" 
          	className="btn btn-large btn-this" 
          	onClick={() => {
          		this.props._mongoDelete({_id: itemObj._id})
          	}}>Delete Article</button><br />
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
						<h2 className="text-right"><i className="fa fa-bullseye"></i>   you have saved {this.props.articlesMongo.length} articles</h2>
					</div>{/* end col-sm-12 */}
				</div>{/* end row */}

				<div class="grid row" data-masonry='{ "itemSelector": ".col-result-body" }'>
					{this._showMongo()}
				</div>{/* end row */}
			{/* end container */}
			</div>
		);
	}
});

module.exports = History;