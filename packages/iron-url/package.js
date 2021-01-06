Package.describe({
  name: 'meteorhubdotnet:iron-url',
  summary: 'Url utilities and support for compiling a url into a regular expression.',
  version: '1.1.0',
  git: 'https://github.com/meteorhubdotnet/iron-url'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.12');

  api.use('underscore');

  api.use('meteorhubdotnet:iron-core@1.0.11');
  api.imply('meteorhubdotnet:iron-core');

  api.add_files('lib/compiler.js');
  api.add_files('lib/url.js');
});

Package.on_test(function (api) {
  api.use('meteorhubdotnet:iron-url');
  api.use('tinytest');
  api.use('test-helpers');
  api.add_files('test/url_test.js', ['client', 'server']);
});
