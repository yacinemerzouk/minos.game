Package.describe({
  name: 'meteorhubdotnet:iron-middleware-stack',
  summary: 'Client and server middleware support inspired by Connect.',
  version: '1.1.0',
  git: 'https://github.com/meteorhubdotnet/iron-middleware-stack'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@2.0');

  api.use('underscore');
  api.use('ejson');

  api.use('meteorhubdotnet:iron-core@1.0.11');
  api.imply('meteorhubdotnet:iron-core');

  api.use('meteorhubdotnet:iron-url@1.0.11');

  api.add_files('lib/handler.js');
  api.add_files('lib/middleware_stack.js');
  api.export('Handler', {testOnly: true});
});

Package.on_test(function (api) {
  api.use('meteorhubdotnet:iron-middleware-stack');
  api.use('tinytest');
  api.use('test-helpers');
  api.add_files('test/handler_test.js');
  api.add_files('test/middleware_stack_test.js');
});
