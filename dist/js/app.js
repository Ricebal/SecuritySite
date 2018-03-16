const mongoose = require('mongoose');

// Connect to mongodb
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', () => {
	console.log('Connection has been made boys');
}).on('error', (error) => {
	console.log('Connection error: ', error);
});
var login = (() => {
	var user;

	var initModule = (() => {
		user = new User();
	});

	var configModule = ((username, password) => {
		user.username = username;
		user.password = password;
	})
})();
var shell = (() => {
	var initModule = (() => {
		login.initModule();
	});
})();

$(() => {
	shell.initModule();
});
const Schema = mongoose.Schema;

// Create Schema and Model
const UserSchema = new Schema({
	id: Number,
	username: String,
	password: String
});

const User = mongoose.model('user', UserSchema);