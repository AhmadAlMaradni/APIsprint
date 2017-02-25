//require the model here
var teacherModel = require('./teacherModel.js')

module.exports ={
	getAllTeacher : function (req , res) {
  		teacherModel.find(function (err, data) {
            res.json(data);
        });
	},
//you have to use the movie model to make a new database entry 
	insertTeacher : function(req, res){
           for (var i = 0; i < req.body.length; i++) {
            teacherModel.create(req.body[i], function (err, teacher) {
                if (err) throw err
            });
        }
        res.json(req.body);

	},
//you need to use params.id to find a movie from your database
	FindTechByID : function(req, res){
 		 teacherModel.findById(req.params.id, function (err, teacher) {
            res.json(teacher);
        });
	}
};
