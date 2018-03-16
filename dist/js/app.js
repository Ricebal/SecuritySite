// const mongoose = require('mongoose');

// // Connect to mongodb
// mongoose.connect('mongodb://localhost/testaroo');

// mongoose.connection.once('open', () => {
// 	console.log('Connection has been made boys');
// 		}).on('error', (error) => {
// 		console.log('Connection error: ', error);
// });
var login = (() => {
	var _user = {};
	var container;

	var initModule = ((container) => {
		$(container).find('#submit').click(() => {
			configModule($(container).find('#username').val(), $(container).find('#password').val(), $(container).find('#remember').is(':checked'));
		});
	});

	var configModule = ((username, password, remember) => {
		_user.username = username;
		_user.password = password;
		_user.remember = remember;
		console.log(_user);
	});

	return {
		initModule: initModule
	};
})();
var register = (() => {
	var _user = {};

	var initModule = (container) => {
		$(container).find('#submit').click(() => {
			configModule($(container).find('#username').val(), $(container).find('#password').val(), $(container).find('#cpassword').val());
		});
	};

	var configModule = (username, password, cpassword) => {
		_user.username = username;
		if(checkPasswords(password, cpassword)){
			_user.password = password;
		} else {
			console.log("Passwords don't match");
		};
		console.log(_user);
	};

	var checkPasswords = (password, password2) => {
		return password === password2;
	};

	return {
		initModule: initModule
	};
})();
var shell = (() => {

	var initLoginModule = (() => {
		login.initModule('#loginForm');
	});

	var initRegisterModule = (() => {
		register.initModule('#registerForm');
	});

	return {
		initRegisterModule: initRegisterModule,
		initLoginModule: initLoginModule
	};
})();
// const Schema = mongoose.Schema;

// // Create Schema and Model
// const UserSchema = new Schema({
// 	id: Number,
// 	username: String,
// 	password: String
// });

// const User = mongoose.model('user', UserSchema);