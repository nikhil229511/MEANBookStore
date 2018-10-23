var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var mongoose=require('mongoose');

Genre=require('./Models/genres');
Books=require('./Models/book');

app.use(bodyparser.json());
//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db=mongoose.connection;

//you need to allow access from other origin so added this code.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/',function(req,res){
	res.send('please Use /api/bookstore or /api/genres');
});

//get genres
app.get('/api/genres',function(req,res){
	Genre.get_Genres(function(err,result){
		if(err)
			throw err;
		res.json(result);
	});
});

//add genres
app.post('/api/genres',function(req,res){
	var genre=req.body;
	Genre.add_Genres(genre,function(err,result){
		if(err)
			throw err;
		res.json(result);
	});
});

//update genres
app.put('/api/genres/:_id',function(req,res){
	var id=req.params._id;
	var genre=req.body;
	Genre.update_Genres(id,genre,{},function(err,result){
		if(err)
			throw err;
		res.json(result);
	});
});

//delete genres
app.delete('/api/genres/:_id',function(req,res){
	var id=req.params._id;
	Genre.delete_Genres(id,function(err,result){
	 	if(err)
			throw err;
		res.json(result);
	});
});

//get all Books
app.get('/api/books',function(req,res){
	Books.get_Books(function(err,result){
		if(err)
			throw err;
		res.json(result);
	});
});

//get Book
app.get('/api/books/:_id',function(req,res){
	Books.get_Book_by_id(req.params._id,function(err,result){
		if(err)
			throw err;
		console.log(result);
		res.json(result);
	});
});

//add Book
app.post('/api/books',function(req,res){
	var book=req.body;
	Books.add_Book(book,function(err,result){
		if(err)
			throw err;
		res.json(result);
	});
});

//update Book
app.put('/api/books/:_id',function(req,res){
	var id=req.params._id;
	var book=req.body;
	Books.update_Book(id,book,{},function(err,result){
		if(err)
			throw err;
		res.json(result);
	});
});

//delete book
app.delete('/api/books/:_id',function(req,res){
	var id=req.params._id;
	Books.delete_Book(id,function(err,result){
	 	if(err)
			throw err;
		res.json(result);
	});
});

app.listen(3000);
console.log("Running on port 3000....");