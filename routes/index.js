var express = require('express');
var router = express.Router();
var conn = require('../db/dbconnect');

// connection.connect();
/* GET home page. */
router.get('/', function(req, res, next) {

	
	conn.query('select * from user', function(error, results){
        if ( error ){
            res.status(400).send('Error in database operation');
        } else {
            res.send(results);
        }
    });
	// connection.end();


  // res.render('index', { title: 'Express' });
});


router.get('/add-user/:name/:email/:password', function(req, res, next) {
	var obj = req.params;
	var query = `insert into user (name, email, password)
				values ('`+req.params.name+`', '`+req.params.email+`', '`+req.params.password+`')`;
	
	conn.query(query, function(error, results){
        if ( error ){
            res.status(400).send('Error in database operation');
        } else {
            res.send("success");
        }
    });
	// connection.end();


  // res.render('index', { title: 'Express' });
});

module.exports = router;
