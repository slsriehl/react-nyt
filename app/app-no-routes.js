// Include the Main React Dependencies and component
const React 		= require("react"), 
			ReactDOM 	= require("react-dom"),
			Main = require("./components/main"), 
			masonry = require('./masonry.min.js');


// This code here allows us to render our main component
ReactDOM.render(<Main />, document.getElementById("app"));
