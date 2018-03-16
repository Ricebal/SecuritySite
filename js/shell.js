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