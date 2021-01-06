Package.describe({
  name: 'meteorhubdotnet:iron-layout',
  summary: 'Dynamic layouts which enable rendering dynamic templates into regions on a page.',
  version: '1.0.12',
  git: 'https://github.com/meteorhubdotnet/iron-layout'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.12');

  // so our default_layout gets compiled
  api.use('templating');
  api.use('blaze');

  // some utils
  api.use('underscore');
  api.use('tracker'); // for Deps

  api.use('meteorhubdotnet:iron-core@1.0.11');
  api.imply('meteorhubdotnet:iron-core');

  // dynamic templates
  api.use('meteorhubdotnet:iron-dynamic-template@1.0.12');

  // if you use iron-layout you should get iron-dynamic-template for free!
  api.imply('meteorhubdotnet:iron-dynamic-template');

  // error messages to remove old packages
  // api.use('cmather:blaze-layout@0.2.5', {weak: true});
  // api.use('cmather:iron-layout@0.2.0', {weak: true});

  // api.add_files('version_conflict_errors.js');
  api.add_files('default_layout.html');
  api.add_files('layout.js');
});

Package.on_test(function (api) {
  api.versionsFrom('METEOR@1.12');

  api.use('meteorhubdotnet:iron-layout');
  api.use('tinytest');
  api.use('test-helpers');
  api.use('templating');
  api.use('deps');

  api.add_files('layout_test.html', 'client');
  api.add_files('layout_test.js', 'client');
});
