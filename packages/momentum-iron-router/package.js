Package.describe({
	name: "meteorhubdotnet:momentum-iron-router",
	summary: "A momentum plugin for transitioning Iron Router pages",
	version: "0.7.0",
	git: "https://github.com/percolatestudio/momentum-iron-router.git"
});

Package.on_use(function (api, where) {
	
	api.versionsFrom('METEOR@2.0');

	api.use([
		'underscore',
		'tracker',
		'meteorhubdotnet:iron-router',
		'meteorhubdotnet:momentum'
	], 'client');

	api.add_files('momentum-iron-router.js', ['client']);
	
});

