const	mongoose 	= require('mongoose'), 
			express 	= require('express'), 
			app 			= express();

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

var ArticleSchema = new Schema ({
	headline: {
		type: String,
		trim: true
	},
	abstract: {
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

ArticleSchema.methods.retrieveArticles = function(res) {
	return this.model('Article').find({}).sort({date: -1}).exec(function(err, data) {
		if(err) {
			console.log(err);
		} else {
			console.log(data);
			res.render('index.hbs', { articles: data});
		}
	});
};

ArticleSchema.methods.saveArticle = function(req, res) {
	return this.model('Article')
		.find({_id: req.query.articleID})
		.exec(function(err, data) {
		if(err) {
			console.log(err);
		} else {
			console.log(data);
			res.render('article.hbs', {article: data[0], showNotes: false});
		}
	});
};

ArticleSchema.methods.deleteArticle = function(req, res, Note, article) {
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