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