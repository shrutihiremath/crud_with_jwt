const movieModel =  require('../models/movies');

exports.getById = (req,res, next) => {
    movieModel.findById(req.params.movieId , (err, movie) => {
        if (err) throw err
        else{
            res.json({status:"success", message: "Movie found!!!", data:{movies: movie}});
        }
    });
}


exports.getAllMovies = (req,res,next) => {
    movieModel.find({}, (err, movies) => {
        if (err) throw err
        else{
            res.json({status:"success", message: "Movies list", data:{movies_list: movies}});
        }
    });
};


exports.updateById = (req,res, next)=> {
    movieModel.findByIdAndUpdate(req.params.movieId, {name:req.body.name} , (err, movieInfo) => {
        if(err)
    next(err);
   else {
    res.json({status:"success", message: "Movie updated successfully!!!", data:null});
   }
    });
}

exports.deleteById = (req, res, next)=>{
    movieModel.findByIdAndRemove(req.params.movieId, function(err, movieInfo){
     if(err)
      next(err);
     else {
      res.json({status:"success", message: "Movie deleted successfully!!!", data:null});
     }
    });
};


exports.createMovies =(req, res,next) =>{
    movieModel.create({ name: req.body.name, released_on: req.body.released_on }, function (err, result) {
        if (err) 
         next(err);
        else{
         res.json({status: "success", message: "Movie added successfully!!!", data: null});
        }
      });
   }