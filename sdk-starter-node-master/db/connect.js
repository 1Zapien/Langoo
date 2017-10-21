var userFile = require('../user.js');
var mysql = require('mysql');

var con = mysql.createConnection({
	host	: 'myuserlangssddb.ce6mheorgyqn.us-west-1.rds.amazonaws.com',
	port	: '3306',
	user	: 'testUser1',
	password: 'testPassword',
	database: 'userLangsSDDB'
});

con.connect(function(err) {
	if (err) {
		throw err;
	}
});

function newUser(user) {
	con.query("INSERT INTO user_info (user_name, user_pass, user_email)" +
		" VALUES (" + user.username + ", " + user.password + ", " +
		user.email + ");")
}

// delete when everything's working and place in a differnt file
con.end();
