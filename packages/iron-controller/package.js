Package.describe({
  name: 'meteorhubdotnet:iron-controller',
  summary: 'Controller class for dynamic layouts.',
  version: '1.0.12',
  git: 'https://github.com/meteorhubdotnet/iron-controller'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.12');

  api.use('underscore');
  api.use('tracker'); // reactivity
  api.use('reactive-dict'); // reactive state variables
  api.use('templating');

  api.use('meteorhubdotnet:iron-core@1.0.11');
  api.imply('meteorhubdotnet:iron-core');

  api.use('meteorhubdotnet:iron-layout@1.0.12');
  api.use('meteorhubdotnet:iron-dynamic-template@1.0.12');

  api.add_files('lib/wait_list.js', 'client');
  api.add_files('lib/controller.js');
  api.add_files('lib/controller_server.js', 'server');
  api.add_files('lib/controller_client.js', 'client');
});

Package.on_test(function (api) {
  api.use('meteorhubdotnet:iron-controller');
  api.use('meteorhubdotnet:iron-layout');
  api.use('tinytest');
  api.use('test-helpers');
  api.use('tracker');
  api.use('templating');

  api.add_files('test/controller_test.html', 'client');
  api.add_files('test/wait_list_test.js', 'client');
  api.add_files('test/controller_test.js', 'client');
});
