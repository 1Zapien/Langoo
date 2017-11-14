var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyAxJYukOm1gvsSfhIIN9-GWapW8xtoGg4c",
    authDomain: "langoo-6a817.firebaseapp.com",
    databaseURL: "https://langoo-6a817.firebaseio.com",
    projectId: "langoo-6a817",
    storageBucket: "langoo-6a817.appspot.com",
    messagingSenderId: "76583754335"
};
var app = firebase.initializeApp(config);
var database = firebase.database();
var usersRef = database.ref('users/');

usersRef.child('testID').update({
	'username': 'testname',
	'password': 'testpass'
})

function writeUser(userID, username, password, email) {
	usersRef.child(userID).update({
		'username': username,
		'password': password,
		'email': email,
		'inSession': false
	})
	//firebase.app().delete()
}

function addUserLang(userID, desired, language, skill) {
	var folder = "known_lang";
	if (desired == true) {
		folder = "des_lang";
	}
	usersRef.child(userID).child(folder).child(language).update({
		'skill': skill
	})
}

function getUserLang(userID) {
	usersRef.child(userID).child('known_lang').once('value', function(snap) {
		if (snap.val() != null) {
			console.log(snap.val());
		}
	})
	usersRef.child(userID).child('des_lang').once('value', function(snap) {
		if (snap.val() != null) {
			console.log(snap.val());
		}
	})
}

function readUser(userID) {
	return usersRef.child(userID).once('value', function(snap) {
		console.log(snap.val());
	})
}

function toggle(userID) {
	return usersRef.child(userID).once('value', function(snap) {
		usersRef.child(userID).update({
			'toggle': !snap.val()['toggle']
		})
	})
}

function firebaseEnd() {
	firebase.app().delete()
}

function readToggle(userID) {
	usersRef.child(userID).on('child_changed', function(snap) {
		console.log(snap.val());
	})
}

/* updating an object
var test = {num: 0};
function check(tst) {
	tst.num = 1;
}
check(test)
console.log(test.num)
*/

module.exports.writeUser = writeUser;
module.exports.readUser = readUser;
module.exports.toggle = toggle;
module.exports.firebaseEnd = firebaseEnd;
module.exports.readToggle = readToggle;
module.exports.addUserLang = addUserLang;
module.exports.getUserLang = getUserLang;