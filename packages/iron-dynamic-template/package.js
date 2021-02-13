Package.describe({
  name: 'meteorhubdotnet:iron-dynamic-template',
  summary: 'Dynamically create and update templates and their data contexts.',
  version: '1.0.12',
  git: 'https://github.com/meteorhubdotnet/iron-dynamic-template'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@2.0');

  api.use('blaze');
  api.use('underscore');
  api.use('ui');
  api.use('jquery');
  api.use('tracker');
  api.use('reactive-var');
  api.use('templating');
  api.use('random');

  api.use('meteorhubdotnet:iron-core@1.0.11');
  api.imply('meteorhubdotnet:iron-core');

  // api.add_files('version_conflict_error.js');
  api.add_files('dynamic_template.html');
  api.add_files('dynamic_template.js');
  api.add_files('blaze_overrides.js');
});

Package.on_test(function (api) {
  api.versionsFrom('METEOR@1.12');

  api.use('meteorhubdotnet:iron-dynamic-template');
  api.use('templating');
  api.use('tinytest');
  api.use('test-helpers');
  api.use('blaze');
  api.use('deps');

  api.add_files('dynamic_template_test.html', 'client');
  api.add_files('dynamic_template_test.js', 'client');
});
