//require files here
var StudentModel = require('./studentModel.js')

module.exports = {
	insertStudent : function (req , res) {
            	console.log(req.body)

            for (var i = 0; i < req.body.length; i++) {
            StudentModel.create(req.body[i], function (err, student) {
                if (err) throw err
            });
        }
        res.json(req.body);
	},
	//you have to use the books model to make a new database entry 
	getAllStudent : function(req , res){
  		StudentModel.find(function (err, data) {
            res.json(data);
        });

	},
	//you need to use params.id to find a books from your database
	FindStuById : function(req , res){
		StudentModel.findById(req.params.id, function (err, student) {
			if(err) throw err
            res.json(student);
        });
	}
};
