Package.describe({
	name: 'meteorhubdotnet:iron-transitions',
	summary: 'Native-looking page transitions for Meteor mobile apps.',
	version: '1.1.2',
	git: 'https://github.com/zendylabs/segue-meteor-package.git'
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@2.0');
	api.use(['less', 'meteorhubdotnet:iron-router', 'meteorhubdotnet:momentum', 'meteorhubdotnet:momentum-iron-router', 'spacebars', 'templating'], 'client');
	api.use('reactive-var');
	api.addFiles('iron-transitions.js');
	api.addFiles('css/iron-transitions.css', 'client');
	api.export('IronTransitions');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('meteorhubdotnet:iron-transitions');
});
