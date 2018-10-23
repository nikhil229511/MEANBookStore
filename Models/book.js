var mongoose=require('mongoose');

var BookSchema=mongoose.Schema({
	title:{
		type:String,
		required: true
	},
	genre:{
		type:String,
		required:true
	},
	description:{
		type:String
	},
	author:{
		type:String
	},
	publisher:{
		type:String
	},
	pages:{
		type:String
	},
	image_url:{
		type:String
	},
	buy_url:{
		type:String
	},
	create_date:{
		type:Date,
		default:Date.now
	}
});

var Book = module.exports = mongoose.model('Book',BookSchema);

//get Books
module.exports.get_Books = function(callback,limit){
	Book.find(callback).limit(limit);
}

//get Book
module.exports.get_Book_by_id = function(id,callback){
	Book.findById(id,callback);
}

//add Book
module.exports.add_Book = function(book,callback){
	Book.create(book,callback);
}

//Update Book
module.exports.update_Book = function(id,book,options,callback){
	var query={_id:id};
	var update={
		title:book.title,
		genre:book.genre,
		description:book.description,
		author:book.author,
		publisher:book.publisher,
		pages:book.pages,
		image_url:book.image_url,
		buy_url:book.buy_url
	}
	Book.findOneAndUpdate(query,update,options,callback);
}

module.exports.delete_Book = function(id,callback){
	var query={_id:id};
	Book.remove(query,callback);
}