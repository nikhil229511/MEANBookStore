var mongoose=require('mongoose');

var GenreSchema=mongoose.Schema({
	name:{
		type:String,
		required: true
	},
	create_date:{
		type:Date,
		default:Date.now
	}
});

var Genre = module.exports = mongoose.model('Genre',GenreSchema);

//get all genre
module.exports.get_Genres = function(callback,limit){
	Genre.find(callback).limit(limit);
}

//add Genre
module.exports.add_Genres = function(genre,callback){
	Genre.create(genre,callback);
}

//Update Genre
module.exports.update_Genres = function(id,genre,options,callback){
	var query={_id:id};
	var update={
		name:genre.name
	}
	Genre.findOneAndUpdate(query,update,options,callback);
}

//Delete Genre
module.exports.delete_Genres = function(id,callback){
	var query={_id:id};
	Genre.remove(query,callback);
}