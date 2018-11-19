var express = require('express');
var router = express.Router();
const Post = require('../models/post');


/* GET users listing. */
router.get('/', function(req, res, next) {
    Post.find({})
        .then(posts => {
            //console.log(posts)
            res.send(JSON.stringify(posts));
        })
        .catch(err => {
            res.status(200).json({ err: err });
        });

 	// res.locals.connection.mongoose('SELECT * from members', function (error, results, fields) {
	// 	if(error) throw error;
	// 	res.send(JSON.stringify(results));
	// });
});

module.exports = router;
