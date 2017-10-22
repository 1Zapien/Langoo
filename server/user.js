/*var user = {
  sys_user: null,
  username: null,
  email: null,
  password: null,
  knownlang: null,
  deslang: null,
  inSession: null
};*/

function User(name, pass, mail) {
	this.username = name;
	this.password = pass;
	this.email = mail;
	this.sys_user = null;
	this.knownlang = null;
	this.deslang = null;
	this.inSession = 0;
}

module.exports = User;
