var User = require('../user.js');
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

// working
function newUser(User) {
	con.query("INSERT INTO user_info (user_name, user_pass, user_email)" +
		" VALUES ('" + User.username + "', '" + User.password + "', '" +
		User.email + "');")
} 

function toggleIS(User) {
	if (User.inSession == 0) {
		con.query("UPDATE user_info SET in_session = " + 1
			+ " WHERE user_name = '" + User.username + "';")
		User.inSession = 1;
	} else {
		con.query("UPDATE user_info SET in_session = " + 0
			+ " WHERE user_name = '" + User.username + "';")
		User.inSession = 0;
	}
	console.log("second " + User.inSession);
}

var testUse = new User("testUser", "testPass", "testEmail");

//newUser(testUse);

console.log("first " + testUse.inSession);
toggleIS(testUse);
console.log("third " + testUse.inSession);

// delete when everything's working and place in a differnt file
con.end();
