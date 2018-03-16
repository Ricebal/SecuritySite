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