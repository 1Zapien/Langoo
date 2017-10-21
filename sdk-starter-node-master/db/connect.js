var mysql = require('mysql');

var con = mysql.createConnection({
	host	: 'myuserlangssddb.ce6mheorgyqn.us-west-1.rds.amazonaws.com',
	port	: '3306',
	user	: 'testUser1',
	password: 'testPassword',
	database: 'userLangsSDDB'
});

con.connect(function(err) {
	if (!err) {
		console.log('Connected');
	} else {
		throw err;
	}
});

con.end();
