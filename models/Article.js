const	mongoose 	= require('mongoose'), 
			Promise		= require('bluebird'), 
			express 	= require('express'),
			util			= require('util'),   
			app 			= express();

mongoose.Promise	= Promise;

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

var ArticleSchema = new Schema ({
	headline: {
		type: String,
		trim: true
	},
	snippet: {
		type: String,
		trim: true
	},
	byline: {
		type: String,
		trim: true
	}, 
	pub_date: {
		type: Date,
		trim: true
	},
	date_saved: {
		type: Date,
		default: Date.now
	}, 
	web_url: {
		type: String,
		trim: true,
		unique: true,
		required: "url is required"
	}
});

ArticleSchema.methods.deleteArticle = function(req, res, article) {
	return this.model('Article').find({}).sort({date: -1}).exec(function(err, data) {
		if(err) {
			console.log(err);
		} else {
			console.log(data);
			res.render('index.hbs', { articles: data});
		}
	});
};

ArticleSchema.methods.saveArticle = function(req, res, article) {
	console.log('article from saveArticle method\n ' + article);
	console.log('req.query from saveArticle method\n' + util.inspect(req.query));
	return this
		.save({article: req.query})
		.then(function(data) {
			console.log(data);
		}).catch(function(e) {
			console.error('error');
		});
};

ArticleSchema.methods.getArticles = function(req, res, article) {
	return this.model('Article')
	.find({_id: req.query.articleID})
	.exec(function(err, data) {
		console.log('viewNotes exec fired');
		console.log(data);
			Note.find({_id: {$in: data[0].notes}})
			.sort({created: -1})
			.exec(function(err, doc) {
				if(err) {
					console.log(err);
				} else {
					console.log('doc is ' + doc);
					res.render('article.hbs', {article: data[0], notes: doc, showNotes: req.query.showNotes});
				}
			});
	});
};



var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;