var shell = (() => {
	var initModule = (() => {
		login.initModule();
	});
})();

$(() => {
	shell.initModule();
});