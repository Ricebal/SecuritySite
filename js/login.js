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