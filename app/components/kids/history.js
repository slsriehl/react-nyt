const React = require('react');

let History = React.createClass({


	_showMongo: function() {
		this.props._mongoGet();
		let mapArts = this.props.articlesMongo.map((itemObj, index) => {
			return( 
       <div key={index} data-id={itemObj._id}>
        	<h3><a href={itemObj.web_url} target="_blank">{index + 1} {itemObj.headline}</a></h3>
          <p>{itemObj.pub_date}</p>
          <p>{itemObj.byline}</p>
          <p>... {itemObj.snippet}...</p>
          <button type="button" className="btn btn-large" onClick={() => {this.props._mongoDelete(itemObj)}}>Delete Article</button><br />
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
						<h2>You have saved {this.props.articlesMongo.length} articles</h2>
					</div>{/* end col-sm-12 */}
				</div>{/* end row */}

				<div className="row">
					<div className="col col-sm-12">
						{this._showMongo()}
					</div>{/* end col-sm-12 */}
				</div>{/* end row */}
			{/* end container */}
			</div>
		);
	}
});

module.exports = History;